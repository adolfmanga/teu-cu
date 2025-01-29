import db from '../config/db.js';
import path from 'path';


export const getAllClientes = async (req, res) => {
    const query = 'SELECT * from clientes ';

    try {
        const [results] = await db.promise().query(query); 
        if (results.length === 0) {
            return res.status(404).json({ message: 'Nenhum cliente encontrado.' });
        }
        return res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao encontrar clientes:', err);
        return res.status(500).json({ message: 'Erro ao encontrar clientes', error: err.message });
    }
};



// função deletar cliente
export const deletarCliente = async (req, res) => {
    const { id } = req.params;

    // Verificar se o cliente existe
    const [cliente] = await db.promise().query('SELECT * FROM clientes WHERE id =?', [id]);
    if (cliente.length === 0) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    try {
        await db.promise().query('DELETE FROM clientes WHERE id =?', [id]);
        res.status(200).json({ message: 'Cliente deletado com sucesso.' });
    } catch (err) {
        console.error('Erro ao deletar cliente:', err);
        res.status(500).json({ message: 'Erro ao deletar cliente.' });
    }
};



export const getAllDogwalkers = async (req, res) => {
    const query = 'SELECT * from dogwalkers ';

    try {
        const [results] = await db.promise().query(query); 
        if (results.length === 0) {
            return res.status(404).json({ message: 'Nenhum Dogwalker encontrado.' });
        }
        return res.status(200).json(results);
    } catch (err) {
        console.error('Erro ao encontrar Dogwalkers:', err);
        return res.status(500).json({ message: 'Erro ao encontrar Dogwalkers', error: err.message });
    }
};



// função deletar Dogwalker
export const deletarDogwalker = async (req, res) => {
    const { id } = req.params;

    try {
        await db.promise().query('DELETE FROM dogwalker WHERE id =?', [id]);
        res.status(200).json({ message: 'Dogwalker deletado com sucesso.' });
    } catch (err) {
        console.error('Erro ao deletar Dogwalker:', err);
        res.status(500).json({ message: 'Erro ao deletar Dogwalker.' });
    }
};




