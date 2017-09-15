const Modality = require('./Modality');
const DatabaseService = require('../db/service/DatabaseService');

class ModalityService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = 'select m.* from ia.modality m order by m.type desc';
            const modalities = await this.DatabaseService.execute(query);

            if (!Array.isArray(modalities))
                return [new Modality(modalities)];

            return modalities.map(modality => new Modality(modalities));

        } catch (error) {
            throw error;
        }

    }

    async getById(modalityId) {
        const query = 'select * from ia.modality where id = ?';
        try {
            const modality = await this.DatabaseService.execute(query, modalityId);

            return new Modality(modality);
        }
        catch (error) {
            throw error;
        }
    }

    async insert(secmodalitytor) {
        const query = 'Insert into ia.modality Set ?';
        try {
            const result = await this.DatabaseService.execute(query, modality);

            modality.id = result.insertId;

            return new Modality(modality);
        }
        catch (error) {
            throw error;
        }
    }

    async update(modality) {
        const query = 'Update ia.modality Set ? where id = ?';
        try {
            await this.DatabaseService.execute(query, [modality, modality.id]);

            return new Modality(modality);
        }
        catch (error) {
            throw error;
        }
    }

    async delete(smodalityId) {
        const query = 'delete from ia.modality where id = ?';
        try {
            await this.DatabaseService.execute(query, modalityId);

            return modalityId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = ModalityService;