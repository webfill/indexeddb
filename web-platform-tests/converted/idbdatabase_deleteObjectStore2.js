require("../../build/global");
const Event = require("../../build/lib/FakeEvent").default;
const {
    add_completion_callback,
    assert_array_equals,
    assert_equals,
    assert_false,
    assert_key_equals,
    assert_not_equals,
    assert_throws,
    assert_true,
    async_test,
    createdb,
    createdb_for_multiple_tests,
    fail,
    format_value,
    indexeddb_test,
    setup,
    test,
} = require("../support-node");

const document = {};
const window = global;



var t = async_test(),
    open_rq = createdb(t);

open_rq.onupgradeneeded = function(e)
{
    var db = e.target.result,
        objStore = db.createObjectStore("delete_outside");

    e.target.transaction.oncomplete = t.step_func(function (e)
    {
        assert_throws('InvalidStateError',
            function() { db.deleteObjectStore("delete_outside"); });
        t.done();
    });
}
