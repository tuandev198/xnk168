import PageIntro from "@/components/PageIntro";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Giới thiệu về công ty"
        title="Giải pháp thực tiễn, cam kết chất lượng"
      >
        <p>
          Năm 2016, Công Ty TNHH Sản Xuất Dịch Vụ Thương Mại Xuất Nhập Khẩu 628
          được thành lập với phương châm “Đổi mới, chuyên nghiệp, chính trực và đôi bên cùng có lợi”. 
          Chúng tôi tập trung vào đơn hàng quốc tế, liên tục mở rộng thị trường và đã thành công trong việc đưa sản phẩm 
          vào thị trường xuất khẩu Mỹ, đánh dấu một bước tiến quan trọng trong hành trình phát triển thương hiệu.
        </p>
        <p className="mt-4">
          Quy trình sản xuất luôn được tối ưu hóa để đảm bảo hiệu quả và đáp ứng nhu cầu thị trường ngày càng tăng. 
          Phạm vi sản phẩm của chúng tôi rất đa dạng, bao gồm:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Nông sản đông lạnh:</strong> ớt hiểm, lá dứa, nước chanh dây, mãng cầu, mía cây, sả bằm, sả bào, khoai mì,...
          </li>
          <li>
            <strong>Thủy sản chế biến:</strong> chả cá thát lát,...
          </li>
          <li>
            <strong>Đồ chay đông lạnh:</strong> chả cá chay, chả quế chay, chả lụa chay,...
          </li>
          <li>
            <strong>Đồ ăn nhẹ & thực phẩm healthy:</strong> bánh pía, bánh in, ngũ cốc,...
          </li>
          <li>
            <strong>Hàng khô:</strong> bún khô, bánh tráng, hoa hồi, thảo quả, hạt ngò, quế, đinh hương, gia vị nấu phở, tiểu hồi, mì chay, mì trứng,...
          </li>
          <li>
            <strong>Gia dụng:</strong> chổi quét nhà, bộ lau nhà, bàn ghế nhựa,...
          </li>
        </ul>
        <p className="mt-4">
          Dù là trong sinh hoạt hằng ngày hay các dịp lễ tết, chúng tôi luôn mong muốn mang đến cho khách hàng những sản phẩm chất lượng, đa dạng và đầy bất ngờ.
        </p>
        <p className="mt-4">
          Các thương hiệu mà chúng tôi tự hào sở hữu như <strong>“7Leaves”</strong>, <strong>“Dragonfly”</strong>, <strong>“Q’s American Best”</strong>, và <strong>“Jumbo Elephant”</strong> đã góp phần khẳng định uy tín và chất lượng trên thị trường quốc tế.
        </p>
        <p className="mt-4">
          Trong tương lai, chúng tôi cam kết không ngừng đổi mới, phát triển và hợp tác để mang lại giá trị bền vững cho khách hàng trên toàn cầu.
        </p>
      </PageIntro>
    </>
  );
};

export default WorkPage;
