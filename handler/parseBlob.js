var binaryCodec = require('chainsql-binary-codec');
// var assert = require('assert');

function parseTxBlob(tx_blob){
    // assert(typeof binary === 'string', 'binary must be a hex string');
    return binaryCodec.decode(tx_blob);   
}
var tx_blob = "120000228000000024000000076140000000004C4B4068400000E8D4A5100073210330E7FC9D56BB25D6893BA3F317AE5BCF33B3291BD63DB32654A313222F7FD02074473045022100A904699BE4FF154490BC3C028AC8017054436770592C6B92B60B50B9BF9FBB6C022075AE17F94CF772330F82F315F27B1CDB1C9A183F7D793A157400F4419E8DB8968114B5F762798A53D543A014CAF8B297CFF8F2F937E8831452F7DB76A067385B8EBA165B17ED84CC76203BC1";
console.log(parseTxBlob(tx_blob));


var _require2 = require('chainsql-hashes'),
    computeBinaryTransactionHash = _require2.computeBinaryTransactionHash;
var id = computeBinaryTransactionHash(tx_blob);
console.log(id);