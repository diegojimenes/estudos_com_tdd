import moment from 'moment'

export const model = (empresa) => {
    const HORA_INICIAL = moment('08:00', 'HH:mm').format("HH:mm")
    const HORA_FINAL = moment('18:00', 'HH:mm').format("HH:mm")
    return {
        data: moment().format("YYYY-MM-DD"),
        dataFim: '',
        horaInicio: HORA_INICIAL,
        horaFim: HORA_FINAL,
        valor: null,
        notaFiscal: { requerida: false },
        loja: null,
        documento: null,
        statusNotificacaoVisita: null,
        statusRoteiro: { id: 1 },
        idEmpresa: empresa.uid,
        imagemEmpresa: empresa.imagem ? empresa.imagem :  null,
        fantasiaEmpresa: empresa.fantasia,
        tipo: null,
        descricao: '',
        arquivado: false,
        tempoEstimado: '',
        selecaoAutomatica: false,
        material: {
            fornecido: false,
            descricao: ''
        }
    }
}

