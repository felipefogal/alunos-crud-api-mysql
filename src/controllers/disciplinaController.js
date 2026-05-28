import Disciplina from "../models/DisciplinaRequest.js";

export const getDisciplinas = async (req, res) => {
  try {
    const disciplinas = await Disciplina.findAll();
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDisciplinaById = async (req, res) => {
  try {
    const { id } = req.params;
    const disciplina = await Disciplina.findByPk(id);
    if (!disciplina) {
      return res.status(404).json({ message: "Disciplina not found" });
    }
    res.json(disciplina);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDisciplina = async (req, res) => {
  try {
    const newDisciplina = await Disciplina.create(req.body);
    res.status(201).json(newDisciplina);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nomeDisciplina, cursoId } = req.body;
    const disciplina = await Disciplina.findByPk(id);
    if (!disciplina) {
      return res.status(404).json({ message: "Disciplina not found" });
    }
    disciplina.nomeDisciplina = nomeDisciplina || disciplina.nomeDisciplina;
    disciplina.cursoId = cursoId || disciplina.cursoId;
    await disciplina.save();
    res.json(disciplina);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDisciplina = async (req, res) => {
  try {
    const { id } = req.params;
    const disciplina = await Disciplina.findByPk(id);
    if (!disciplina) {
      return res.status(404).json({ message: "Disciplina not found" });
    }
    await disciplina.destroy();
    res.json({ message: "Disciplina deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
