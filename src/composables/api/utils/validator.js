import useFormatter from "@/composables/api/utils/formatter";

export default function useValidator() {
    const formatter = useFormatter();

    function isBirthday(dateStr) {
        const year = Number(dateStr.substr(0, 4)); // 입력한 값의 0~4자리까지 (연)
        const month = Number(dateStr.substr(4, 2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월)
        const day = Number(dateStr.substr(6, 2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일)
        const today = new Date(); // 날짜 변수 선언
        const yearNow = today.getFullYear(); // 올해 연도 가져옴

        const yyyymmdd_now = formatter.toDate(today, '');
        const yyyymmdd_bit = formatter.toDate(dateStr, '');

        if(yyyymmdd_now < yyyymmdd_bit) return false;

        if (dateStr.length <= 8) {
            if (1900 > year || year > yearNow) {
                return false;
            } else if (month < 1 || month > 12) {
                return false;
            } else if (day < 1 || day > 31) {
                return false;
            } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
                return false;
            } else if (month === 2) {
                const isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                return !(day > 29 || (day === 29 && !isleap));
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function isCheckAge(dateStr, checker){
        const age = new Date(Date.now() - Date.parse(formatter.toDate(dateStr, '-'))).getFullYear() - 1970;
        if(typeof checker === 'function') return checker(age);
        return age;
    }

    return {
        isBirthday,
        isCheckAge,
    }
}
