function debugAccess(obj, prop, debugGet){
        let origValue = obj[prop];
        Object.defineProperty(obj, prop, {
            get: function () {
                if ( debugGet )
                    debugger;
                return origValue;
            },
            set: function(val) {
                debugger;
                return origValue = val;
            }
        });
    };
debugAccess(document, 'cookie');
