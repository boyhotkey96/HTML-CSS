1. Tạo ra 6 buttons với kiến thức đã học, và có gradient đẹp như hình, có thể sử dụng BEM như `btn btn--green` chẳng hạn, trong các buttons này đều có `box-shadow` tương ứng với màu gradient luôn nên chú ý nhé: https://assets.materialup.com/uploads/cc065902-1545-4f0f-adc3-b9344a4f0a56/preview.png
2. Tạo ra text gradient đơn giản như hình: https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/02/TextFill_image6.png
3. Sử dụng CSS về `child` hoặc `type` để làm các màu như hình, chỉ làm chỗ các màu thôi nhé, từ chỗ "Typography" trở xuống bỏ đi, ví dụ `color__item:first-child{background-color:red}`: https://cdn.dribbble.com/users/757683/screenshots/5942067/attachments/1281258/style_02.jpg
4. Sử dụng :hover để khi hover vào các màu ở các bài 3 thì đổi màu bât kỳ mà các bạn thích, lưu ý có `transition` cho nó mượt mà nhen.
5. Cho HTML như sau
   `
   <div data-link="https://google.com">https://google.com</div>
   <div data-link="http://vnexpress.vn">http://facebook.com</div>
   <div data-name="hello">hello</div>
   <div data-name="againhello">again hello</div>
   <input type="email" name="email">
   <input type="text" name="fullname">
   `

- Dùng kiến thức về Selectors để chọn ra các thẻ `div` có `data-link` bắt đầu bằng https
- Chọn ra các thẻ `div` có `data-link` kết thúc bằng `.vn`
- Chọn ra các thẻ `div` có `data-name` có chứa chữ `hello`
- Chọn ra `input` có `type` là email
- Chọn ra `input` có `name` là fullname

Lưu ý: Ráng code ra cho dễ phân biệt nha, dùng BEM, những kiến thức đã học như box-sizing, đơn vị rem, dùng Biến để lưu các mã màu, font chữ thì dùng font "Montserrat" từ Google fonts nha. Cố gắng sử dụng hết các thứ như là `:not` hay là combinator như `+ ~ >`
