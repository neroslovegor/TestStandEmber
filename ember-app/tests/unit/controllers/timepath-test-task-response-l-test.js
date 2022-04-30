import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:timepath-test-task-response-l', 'Unit | Controller | timepath-test-task-response-l', {
  // Specify the other units that are required for this test.
  needs: [
    'controller:colsconfig-dialog',
    'service:objectlistview-events',
    'service:user-settings',
    'service:app-state',
  ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
