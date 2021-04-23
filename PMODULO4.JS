document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#appPRODUCTOs',
        data: {

            MARCA: '',

            STOCK: '',

            formActualizar: false,

            idActualizar: -1,

            MARCAActualizar: '',

            STOCKActualizar: '',

            PRODUCTOs: [] 
        },
        methods: {
            crearPRODUCTO: function () {

                this.PRODUCTOs.push({
                    id: + new Date(),
                    MARCA: this.MARCA,
                    STOCK: this.STOCK
                });

                this.MARCA = '';
                this.STOCK = '';
            },
            verFormActualizar: function (PRODUCTO_id) {

                this.idActualizar = PRODUCTO_id;
                this.MARCAActualizar = this.PRODUCTOs[PRODUCTO_id].MARCA;
                this.STOCKActualizar = this.PRODUCTOs[PRODUCTO_id].STOCK;

                this.formActualizar = true;
            },
            borrarPRODUCTO: function (PRODUCTO_id) {

                this.PRODUCTOs.splice(PRODUCTO_id, 1);
            },
            guardarActualizacion: function (PRODUCTO_id) {

                this.formActualizar = false;

                this.PRODUCTOs[PRODUCTO_id].MARCA = this.MARCAActualizar;
                this.PRODUCTOs[PRODUCTO_id].STOCK = this.STOCKActualizar;
            }
        }
    });
});