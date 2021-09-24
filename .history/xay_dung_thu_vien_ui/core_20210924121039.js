export default function html() {
    // Hàm này gọi là template engine, hàm này xử lí một số lỗi linh tinh của html thôi
    return values
        .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
        .filter((x) => (x && x !== true) || x === 0)
        .join("");
}