const Joi = require("joi");


const postSchma = Joi.object({
    titulo: Joi.string().min(3).required().messages({
        "string.empty": "O título é obrigatorio",
        "string.min": "O título de possuir ao menos 3 caracteres",
        "any.requerid": "O título é obrigatorio"
    }),

    conteudo: Joi.string().min(5).required().messages({
        "string.empty": "O conteúdo é obrigatorio",
        "string.min": "O conteúdo deve possuir ao menos 3 caracteres",
        "any.requerid": "O conteúdo é obrigatorio"
    }),

    // usuario_id:Joi.number().integer().required().messages({
    //     "number.base": "O usuário_id deve ser um número",
    //     "number.integer": "O usuário_id deve ser um número inteiro",
    //     "any.required": "O usuário_id é obrigatório"

    // })
});

function validarPost( req, res, next){
    const {error} = postSchma.validate(req.body, {abortEarly: false})
    if(error){
       return res.status(400).json({
        erro: error.details.map(e => e.message)
       });
    }
    next()
 }

 module.exports = validarPost;