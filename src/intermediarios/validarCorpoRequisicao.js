const validarCorpoRequisicao = (joiSchema) => async (req, res, next) => {
    try {

        if(req.baseUrl === "/cliente") {

            const { nome, email, cpf } = req.body;
            const { cep, rua, numero, bairro, cidade, estado } = req.body; 

            if(req.enderecoCadastrado) {
                await joiSchema.validateAsync(req.body);
                return next();
            }

            if((cep && (!rua || !numero || !bairro || !cidade || !estado)) ||
            (rua && (!cep || !numero || !bairro || !cidade || !estado)) ||
            (numero && (!rua || !cep || !bairro || !cidade || !estado)) ||
            (bairro && (!rua || !numero || !cep || !cidade || !estado)) ||
            (cidade && (!rua || !numero || !bairro || !cep || !estado)) ||
            (estado && (!rua || !numero || !bairro || !cidade || !cep))) {

                return res.status(400).json({mensagem: "Se optar por cadastrar o endereço é obrigatório o preenchimento de todos os campos de endereço"});
            }

            if(cep && rua && numero && bairro && cidade && estado) {
                await joiSchema.validateAsync(req.body);
                return next();

            }else{
                await joiSchema.validateAsync({ nome, email, cpf });
                return next();
            }
        }
        
        await joiSchema.validateAsync(req.body);

    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }

    next();
};

module.exports = validarCorpoRequisicao;
