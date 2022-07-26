
export default function useFormatter() {
    function toPrice(value, separator = ',') {
        const v = value.toString();
        return v.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }

    //yyyymmdd
    function toDate(value, separator = '.', options = {}) {
        let v = value;
        if(v instanceof Date){
            v = `${v.getFullYear()}${String(v.getMonth() + 1).padStart(2, '0')}${String(v.getDate()).padStart(2, '0')}`;
        }

        v = v.toString();

        if (v.length === 8) {
            const is_sep_array = Array.isArray(separator);
            if(options.removeYear === true){
                if (is_sep_array && separator.length >= 2) {
                    return v.replace(/(\d{4})(\d{2})(\d{2})/, `$2${separator[0]}$3${separator[1]}`);
                } else {
                    return v.replace(/(\d{4})(\d{2})(\d{2})/,  is_sep_array ? `$2${separator[0]}$3` : `$2${separator}$3`);
                }
            } else {
                if (is_sep_array && separator.length >= 3) {
                    return v.replace(/(\d{4})(\d{2})(\d{2})/, `$1${separator[0]}$2${separator[1]}$3${separator[2]}`);
                } else {
                    return v.replace(/(\d{4})(\d{2})(\d{2})/, is_sep_array ? `$1${separator[0]}$2${separator[0]}$3` : `$1${separator}$2${separator}$3`);
                }
            }
        }
    }

    function toPhone(value, separator = '-') {
        const v = value.toString();
        return v.replace(/(\d{3})(\d{4})(\d{4})/, `$1${separator}$2${separator}$3`);
    }

    function toGender(value){
        const v = value.toString();
        return v === '0' ? '남성' : '여성';
    }

    function toYn(value){
        const v = value.toString();
        if(v === '9'){
            return '선택안함';
        }

        return  v === '1' ? '예' : '아니요';
    }

    function toAge(value){
        if(value === 99) return '선택안함';
        return value + '대';
    }

    function toFamilies(value){
        if(value === 99) return '선택안함';
        return value + '인';
    }

    return {
        toPrice,
        toDate,
        toPhone,
        toGender,
        toYn,
        toAge,
        toFamilies,
    }
}
