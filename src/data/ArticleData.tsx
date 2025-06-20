import {StudentSubData} from "./article/StudentSubData.tsx";
import {UltrasoundSubData} from "./article/UltrasoundSubData.tsx";
import {MRISubData} from "./article/MRISubData.tsx";
import {KnowledgeSubData} from "./article/KnowledgeSubData.tsx";
import {VideoSubData} from "./article/VideoSubData.tsx";
import {InfographicSubData} from "./article/InfographicSubData.tsx";
import {EbookSubData} from "./article/EbookSubData.tsx";

export const ArticleItems = [
    {
        title: 'สำหรับนักศึกษาแพทย์',
        filter: '',
        detail: '',
        image: 'https://doctorkeng.com/wordpress/wp-content/uploads/2023/10/study-joint-2-692x1024.jpg',
        subContent: StudentSubData
    },
    {
        title: 'อัลตร้าซาวด์',
        filter: '',
        detail: '',
        image: 'https://doctorkeng.com/wordpress/wp-content/uploads/2023/10/ultrasound-2-692x1024.jpg',
        subContent: UltrasoundSubData,
    },
    {
        title: 'MRI',
        filter: '',
        detail: `MRI ย่อมาจาก Magnetic Resonance Imaging เป็นการตรวจด้วยคลื่นแม่เหล็กไฟฟ้า มีวัตถุประสงค์เพื่อดูรายละเอียดของพยาธิสภาพต่างๆที่เกิดกับร่างกาย สิ่งที่สามารถเห็นได้ชัดเจนจากการทำ MRI ได้แก่ เนื้อเยื่ออ่อนต่างๆเช่น กล้ามเนื้อ เส้นเอ็น เส้นประสาท หมอนรองกระดูก กระดูกอ่อน ดังนั้นจึงมีประโยชน์มากในผู้ป่วยที่มี

(*) อาการปวดไหล่ เพื่อจะวินิจฉัยดูว่ามีการฉีกขาดของเส้นเอ็น หรือพยาธิสภาพของเส้นเอ็นที่บริเวณของหัวไหล่หรือไม่

(*) อาการปวดหลัง สามารถช่วยในการวินิจฉัยว่ามีปัญหาในเรื่องของหมอนรองกระดูกสันหลังมีการเคลื่อนกดทับสาทหรือไม่

(*) อาการปวดเข่า สามารถช่วยวินิจฉัยว่ามีการฉีกขาดของเส้นเอ็นหรือไม่

รวมทั้งช่วยในการวินิจฉัยก้อนเนื้องอก และมะเร็งกระดูก มะเร็งเนื้อเยื่ออ่อนได้เป็นอย่างดี

ดังนั้นในผู้ป่วยที่มีอาการปวดเรื้อรังมานาน รักษาแล้วไม่ดีขึ้น การตรวจด้วย MRI ก็เป็นเครื่องมืออย่างหนึ่งในการช่วยการวินิจฉัยโรคต่างๆเหล่านี้`,
        image: 'https://doctorkeng.com/wordpress/wp-content/uploads/2023/10/mri-2-692x1024.jpg',
        subContent:MRISubData
    },
    {
        title: 'ความรู้ทั่วไป',
        filter: '',
        detail: '',
        image: '',
        subContent:KnowledgeSubData
    },
    {
        title: 'Video',
        filter: '',
        detail: '',
        image: 'https://doctorkeng.com/wordpress/wp-content/uploads/2023/10/videoread-2-692x1024.jpg',
        subContent:VideoSubData
    },
    {
        title: 'Infographic',
        filter: '',
        detail: '',
        image: 'https://doctorkeng.com/wordpress/wp-content/uploads/2023/11/info-692x1024.jpg',
        subContent:InfographicSubData
    },
    {
        title: 'E-book',
        filter: '',
        detail: ``,
        image: 'https://doctorkeng.com/wordpress/wp-content/uploads/2023/10/ebook-1-692x1024.jpg',
        subContent:EbookSubData
    },

]