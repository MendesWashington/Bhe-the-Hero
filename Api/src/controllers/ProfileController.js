const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        try {
            const ong_id = request.headers.authorization;
            const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

            return response.json(incidents);

        } catch (error) {
            return response.status(400).json({error: 'Operation not permitted!'});
        }
    },
}