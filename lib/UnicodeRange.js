function UnicodeRange (start, end, name) {
    this.start = start;
    this.end = end;
    this.name = name;
}

UnicodeRange.prototype = {
    start: null,
    end: null,
    name: null,
    forEach: function (callback, scope) {
        var start = parseInt(this.start, 16),
            end = parseInt(this.end, 16),
            i = start,
            n = 0,
            p = '0',
            pp = '00',
            ppp = '000',
            len,
            j;

        while (i <= end) {
            j = i.toString(16).toUpperCase();
            len = j.length;

            if (len < 4) {
                if (len === 1) {
                    // Possible?
                    j = ppp + j;
                } else if (len === 2) {
                    j = pp + j;
                } else if (len === 3) {
                    // Possible?
                    j = p + j;
                }
            }

            callback.call(scope, j, n, this);
            i++;
            n++;
        }
    },
    toString: function () {
        return this.name + ': ' + this.start + ' - ' + this.end;
    }
};