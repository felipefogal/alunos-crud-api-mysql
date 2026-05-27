import Aluno from "../models/AlunoRequest.js";

export const getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAlunoById = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAluno = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAluno = async (req, res) => {
  try {
    const { nome, email, endereco, telefone, documento, rm } = req.body;
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      aluno.nome = nome || aluno.nome;
      aluno.email = email || aluno.email;
      aluno.endereco = endereco || aluno.endereco;
      aluno.telefone = telefone || aluno.telefone;
      aluno.documento = documento || aluno.documento;
      aluno.rm = rm || aluno.rm;
      await aluno.save();
      res.json(aluno);
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (aluno) {
      await aluno.destroy();
      res.json({ message: "Aluno deletado com sucesso" });
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
