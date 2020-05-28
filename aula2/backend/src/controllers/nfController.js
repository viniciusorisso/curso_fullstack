module.exports = {
    notaFiscal (req, res){
        const token = req.params.nf;
        res.json(token);
    }
}