import { Author, Book } from "../models";
import * as Yup from "yup";

class AuthorController {
  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Nome é obrigatorio")
          .min(3, "Nome deve conter mais de 3 caracteres."),
        avatar_url: Yup.string().url("Avatar url deve ser no formato de URL."),
      });

      await schema.validate(req.body);

      const createdAuthor = await new Author({
        ...req.body,
      });

      await createdAuthor.save();

      return res.json({ createdAuthor });
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async getAll(req, res) {
    try {
      const authors = await Author.findAll({
        order: [["name", "ASC"]],
      });

      return res.json(authors);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Id do autor é obrigatório." });
      }

      const author = await Author.findByPk(Number(id), {
        include: [{ model: Book, as: "book" }],
      });

      if (!author) {
        return res.status(404).json({ error: "Autor não encontrado." });
      }

      res.json(author);
    } catch (error) {
      return res.status(400).json({ error: error?.message });
    }
  }
}

export default new AuthorController();
