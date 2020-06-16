import multer from "multer";
import path from "path";
import crypto from "crypto"; // gerar hash aleatório

export default {
  storage: multer.diskStorage({
    // aonde vao parar os arquivos enviados
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
