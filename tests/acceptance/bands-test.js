import { test } from 'qunit';
import moduleForAcceptance from 'set-list-manager/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bands');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
