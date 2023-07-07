import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM empresa";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = 
      "INSERT INTO empresa(`nome`,`cnpj`,`fone`, `endereco`,`qvm`, `qvc`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.cnpj,
        req.body.fone,
        req.body.endereco,
        req.body.qvm,
        req.body.qvc,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Empresa cadastrada com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q =
        "UPDATE empresa SET `nome` = ?, `cnpj` = ?, `fone` = ?, `endereco` = ?,`qvm` = ?, `qvc` = ?   WHERE `id` = ?";
    const values = [
        req.body.nome,
        req.body.cnpj,
        req.body.fone,
        req.body.endereco,
        req.body.qvm,
        req.body.qvc,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Empresa atualizada com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM empresa WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Empresa deletado com sucesso.");
    });
};