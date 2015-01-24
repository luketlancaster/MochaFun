/* global describe, it */
/* jshint expr: true */

'use strict';

var expect      = require('chai').expect,
    Constructor = require(process.cwd() + '/lib/Constructor');

describe('Mocha', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Constructor', function () {
  describe('init', function () {
    it('should have public variables', function () {
      var constructed = new Constructor();
      expect(constructed.publicVariable).to.equal('foo');
    });
    it('should accept an argument', function () {
      var barConstructed = new Constructor('bar'),
          bazConstructed = new Constructor('baz');

      expect(barConstructed.publicVariable).to.equal('bar');
      expect(bazConstructed.publicVariable).to.equal('baz');
    });
    it('should have a publicBoolean', function () {
      var constructed = new Constructor();
      expect(constructed.publicBoolean).to.exist();
    });
  });
  describe('#publicMethod', function () {
    it('should return "Hello World"', function () {
      var constructed = new Constructor();
      expect(constructed.publicMethod()).to.equal('Hello World');
      expect(constructed.hasOwnProperty('publicMethod')).to.be.false;
    });
  });
  describe('#checkPrivateBoolean', function () {
    it('should return true or false', function () {
      var constructed = new Constructor();
      expect(constructed.checkPrivateBoolean()).to.exist();
    });
  });
  describe('#flipPublicBoolean', function () {
    it('should flip the publicBoolean', function () {
      var constructed = new Constructor(),
          prior       = constructed.publicBoolean,
          posterior,
          secondaryPosterior;

      constructed.flipPublicBoolean();
      posterior = constructed.publicBoolean;
      expect(posterior).to.equal(!prior);

      constructed.flipPublicBoolean();
      secondaryPosterior = constructed.publicBoolean;
      expect(secondaryPosterior).to.equal(!posterior);
    });
    it("should flip the instance's publicBoolean", function () {
      var constructed1 = new Constructor(),
          constructed2 = new Constructor(),
          c1prior      = constructed1.publicBoolean,
          c2prior      = constructed2.publicBoolean;

      constructed1.flipPublicBoolean();
      expect(constructed1.publicBoolean).to.equal(!c1prior);
      expect(constructed2.publicBoolean).to.equal(c2prior);
    });
  });
  describe('#flipPrivateBoolean', function () {
    it('should flip the privateBoolean', function () {
      var constructed = new Constructor(),
          prior       = constructed.checkPrivateBoolean(),
          posterior,
          secondaryPosterior;

      constructed.flipPrivateBoolean();
      posterior = constructed.checkPrivateBoolean();
      expect(posterior).to.equal(!prior);

      constructed.flipPrivateBoolean();
      secondaryPosterior = constructed.checkPrivateBoolean();
      expect(secondaryPosterior).to.equal(!posterior);
    });
    it("should flip the all instance's privateBoolean", function (){
      var constructed1 = new Constructor(),
          constructed2 = new Constructor(),
          c1prior      = constructed1.checkPrivateBoolean(),
          c2prior      = constructed2.checkPrivateBoolean();

      constructed1.flipPrivateBoolean();
      expect(constructed1.checkPrivateBoolean()).to.equal(!c1prior);
      expect(constructed2.checkPrivateBoolean()).to.equal(!c2prior);
    });
  });
});

