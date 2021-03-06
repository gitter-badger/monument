/* eslint-env node, mocha */
'use strict';

const assert = require('chai').assert
    , parser = require('./parser')
    , Readable = require('stream').Readable
    , fs = require('fs')
    , events = require('harken')
    , path = require('path');

let stream
    , jsonBody
    , formDataBody
    , urlBody
    , errorBody
    , fileToRead;

describe('Parser Tests', () => {

    beforeEach(() => {
        stream = new Readable();
        jsonBody = { name: 'Tomas Voekler' };
        fileToRead = path.join(process.cwd(), '/test_stubs/formDataBody.txt');
        formDataBody = fs.createReadStream(fileToRead);
        urlBody = 'name=daniel&title=lord+of+the+actual+internet1';
        errorBody = '{name: "Tomas Voekler"';
    });

    it('should return a function', () => {
        assert.isFunction(parser);
    });

    it('should parse out a multipart/form-data submission', (done) => {
        formDataBody.headers = {
            'content-length': formDataBody.length
            , 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryOR86nFvrvo9BHCQm'
        };

        parser({ req: formDataBody }, (body, err) => {
            assert.isUndefined(err);
            assert.isObject(body);
            assert.strictEqual(body.name, 'daniel');
            done();
        });
    });

    it('should parse out a application/x-www-form-urlencoded submission', (done) => {
        stream.push(urlBody);
        stream.push(null);
        stream.headers = {
            'content-length': urlBody.length
            , 'content-type': 'application/x-www-form-urlencoded'
        };

        parser({ req: stream }, (body, err) => {
            assert.isUndefined(err);
            assert.isObject(body);
            assert.strictEqual(body.name, 'daniel');
            done();
        });
    });

    it('should parse out a json post/put/update', (done) => {
        stream.push(JSON.stringify(jsonBody));
        stream.push(null);
        stream.headers = {
            'content-length': 24
            , 'content-type': 'application/json'
        };

        parser({ req: stream }, (body) => {
            assert.isObject(body);
            done();
        }, {});

    });
    it('should parse out a json post/put/update without the correct header', (done) => {
        stream.push(JSON.stringify(jsonBody));
        stream.push(null);
        stream.headers = {
            'content-length': 24
        };

        parser({ req: stream }, (body) => {
            assert.isObject(body);
            done();
        }, {});

    });

    it('should place the parsed elements in body', (done) => {
        stream.push(JSON.stringify(jsonBody));
        stream.push(null);
        stream.headers = {
            'content-length': 24
            , 'content-type': 'application/json'
        };

        parser({ req: stream }, (body) => {
            assert.strictEqual(JSON.stringify(body), JSON.stringify(jsonBody));
            done();
        }, {});

    });

    it('should handle parse errors correctly when they occur', (done) => {
        stream.push(errorBody);
        stream.push(null);
        stream.headers = {
            'content-length': 23
            , 'content-type': 'application/json'
        };

        events.on('error:parse', (msg) => {
            assert.isDefined(msg);
            assert.instanceOf(msg, Error);
            events.emit('error');
        });

        parser({ req: stream }, (body) => {
            assert.isNull(body);
            events.emit('parse');
        }, {});

        events.required([ 'parse', 'error' ], () => {
            done();
        });
    });

    it('should parse out uploaded files');
});
