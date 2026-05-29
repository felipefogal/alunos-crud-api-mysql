import Curso from "../models/CursoRequest.js";

export const getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ message: "Curso não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCurso = async (req, res) => {
  try {
    const { nome, descricao } = req.body;
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      curso.nome = nome || curso.nome;
      curso.descricao = descricao || curso.descricao;
      await curso.save();
      res.json(curso);
    } else {
      res.status(404).json({ message: "Curso não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      await curso.destroy();
      res.json({ message: "Curso deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Curso não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
