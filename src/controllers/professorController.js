import Professor from "../models/ProfessorRequest.js";

export const getProfessores = async (req, res) => {
  try {
    const professores = await Professor.findAll();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfessorById = async (req, res) => {
  try {
    const professor = await Professor.findByPk(req.params.id);
    if (!professor) {
      return res.status(404).json({ message: "Professor não encontrado" });
    }
    res.json(professor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProfessor = async (req, res) => {
  try {
    const professor = await Professor.create(req.body);
    res.status(201).json(professor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfessor = async (req, res) => {
  try {
    const { nomeProfessor, titulacao } = req.body;
    const professor = await Professor.findByPk(req.params.id);
    if (!professor) {
      return res.status(404).json({ message: "Professor não encontrado" });
    }
    professor.nomeProfessor = nomeProfessor || professor.nomeProfessor;
    professor.titulacao = titulacao || professor.titulacao;
    await professor.save();
    res.json(professor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProfessor = async (req, res) => {
  try {
    const professor = await Professor.findByPk(req.params.id);
    if (!professor) {
      return res.status(404).json({ message: "Professor não encontrado" });
    }
    await professor.destroy();
    res.json({ message: "Professor deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
