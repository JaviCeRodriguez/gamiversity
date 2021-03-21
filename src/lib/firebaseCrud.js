export default class FirebaseCrud {
    constructor(db) {
        this.db = db;
    }

    create() {
        // No es prioridad ahora
    }

    retrieve() {
        let data
        this.db.collection('usuarios')
            .orderBy('name', 'desc')
            .get()
            .then((querySnapshot) => {
                data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            });
        return data;
    }

    update() {
        
    }

    delete() {
        // No es prioridad ahora
    }
}