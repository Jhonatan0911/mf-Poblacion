import { Component } from '@angular/core';
import { MainService } from './shared/services/main.service';
import { Combo } from './shared/models/Combo';
import { ParametrizacionService } from './shared/services/parametrizacion.service';
import { PoblacionDto, PoblacionFilter, TitularDto } from './shared/models/Poblacion';
import { ModalNotasComponent } from './shared/components/modal-notas/modal-notas.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  loading: boolean = false;
  loadingSearchTitular: boolean = false;
  loadingSarchPaciente: boolean = false;

  comboTipoDocumento: Combo[] = [];
  comboGenero: Combo[] = [];
  comboOrientacionSexual: Combo[] = [];
  comboEstadoCiviles: Combo[] = [];
  comboEscolaridades: Combo[] = [];
  comboOcupaciones: Combo[] = [];
  comboReligiones: Combo[] = [];
  comboEtnias: Combo[] = [];
  comboDiscapacidades: Combo[] = [];
  comboDepartamentos: Combo[] = [];
  comboProvinciaResidencia: Combo[] = [];
  comboEstratos: Combo[] = [];
  comboPrograma: Combo[] = [];
  comboRegimen: Combo[] = [];
  comboParentesco: Combo[] = [];
  comboSexo: Combo[] = [];
  comboBoolean: any[] = [
    {
      descripcion: 'Sí',
      value: true
    },
    {
      descripcion: 'No',
      value: false
    },
  ];
  comboTipoAfiliacion: Combo[] = [
    {
      id:1,
      descripcion: 'Afiliación 1'
    },
    {
      id:2,
      descripcion: 'Afiliación 2'
    }
  ];



  searchedPacienteTitular: any[] = []

  ref: DynamicDialogRef | undefined;

  activeIndex: number = 0;

  comboSeguro: Combo[] = [];

  items = [
    {
      label: 'Datos personales',
      card: 'datos',
      disabled: true
    },
    {
      label: 'Ubicación',
      card: 'location',
      disabled: true
    },
    {
      label: 'Contacto',
      card: 'contacto',
      disabled: true
    },
    {
      label: 'Salud',
      card: 'salud',
      disabled: true
    },
    {
      label: 'Confirmación de datos',
      card: 'confirmar',
      disabled: true
    }
  ];


  constructor(
    private confirmationService: ConfirmationService,
    public _mainService: MainService,
    private dialogService: DialogService,
    private _parametrizacionService: ParametrizacionService,
    private messageService: MessageService
  ){
    this.getParTipoDocumento();
    this.getParGenero();
    this.getParSexo();
    this.getParOrientacionSexual();
    this.getParEstadoCiviles();
    this.getParEscolaridades();
    this.getParOcupaciones();
    this.getParReligiones();
    this.getParEtnias();
    this.getParDiscapacidades();
    this.getParDepartamentos();
    this.getParEstratos();
    this.getParProgramas();
    this.getParRegimen();
    this.getParParentesco();
    this.getParSeguros();

  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  onNext() {
    // if (this.activeIndex === 3 && !this._mainService.form_paciente.value.salud?.swHasTitular) {
    //   this.activeIndex += 2; // Saltar el paso "Titular" si no está seleccionado
    // } else {
      this.activeIndex += 1;
    // }
  }

  onPrevious() {
    // if (this.activeIndex === 5 && !this._mainService.form_paciente.value.salud?.swHasTitular) {
    //   this.activeIndex -= 2; // Saltar el paso "Titular" si no está seleccionado
    // } else {
      this.activeIndex -= 1;
    // }
  }

  getParTipoDocumento(){
    this.loading = true;
    this._parametrizacionService.getParTipoDocumento().subscribe({
      next: (res) => {
        if(res){
          this.comboTipoDocumento = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParGenero(){
    this.loading = true;
    this._parametrizacionService.getParGenero().subscribe({
      next: (res) => {
        if(res){
          this.comboGenero = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParSexo(){
    this.loading = true;
    this._parametrizacionService.getParSexo().subscribe({
      next: (res) => {
        if(res){
          this.comboSexo = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParOrientacionSexual(){
    this.loading = true;
    this._parametrizacionService.getParOrientacionSexual().subscribe({
      next: (res) => {
        if(res){
          this.comboOrientacionSexual = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParEstadoCiviles(){
    this.loading = true;
    this._parametrizacionService.getParEstadoCiviles().subscribe({
      next: (res) => {
        if(res){
          this.comboEstadoCiviles = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParEscolaridades(){
    this.loading = true;
    this._parametrizacionService.getParEscolaridades().subscribe({
      next: (res) => {
        if(res){
          this.comboEscolaridades = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParOcupaciones(){
    this.loading = true;
    this._parametrizacionService.getParOcupaciones().subscribe({
      next: (res) => {
        if(res){
          this.comboOcupaciones = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParReligiones(){
    this.loading = true;
    this._parametrizacionService.getParReligiones().subscribe({
      next: (res) => {
        if(res){
          this.comboReligiones = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParEtnias(){
    this.loading = true;
    this._parametrizacionService.getParEtnias().subscribe({
      next: (res) => {
        if(res){
          this.comboEtnias = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParDiscapacidades(){
    this.loading = true;
    this._parametrizacionService.getParDiscapacidades().subscribe({
      next: (res) => {
        if(res){
          this.comboDiscapacidades = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParDepartamentos(){
    this.loading = true;
    this._parametrizacionService.getParDepartamentos().subscribe({
      next: (res) => {
        if(res){
          this.comboDepartamentos = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParCiudadesByDepartamentoResidencia(){
    if(this._mainService.form_paciente.value.location?.departamentoResidencia){
      this.loading = true;
      this._parametrizacionService.getParCiudadesByDepartamento(this._mainService.form_paciente.value.location?.departamentoResidencia).subscribe({
        next: (res: any) => {
          if(res){
            this.comboProvinciaResidencia = res;
          }
        },
        error: (err) => {
          this.loading = false;
        },
        complete: ()=>{
          this.loading = false;
        }
      })
    }
  }

  getParEstratos(){
    this.loading = true;
    this._parametrizacionService.getParEstratos().subscribe({
      next: (res) => {
        if(res){
          this.comboEstratos = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParProgramas(){
    this.loading = true;
    this._parametrizacionService.getParProgramas().subscribe({
      next: (res) => {
        if(res){
          this.comboPrograma = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParRegimen(){
    this.loading = true;
    this._parametrizacionService.getParRegimen().subscribe({
      next: (res) => {
        if(res){
          this.comboRegimen = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParParentesco(){
    this.loading = true;
    this._parametrizacionService.getParParentesco().subscribe({
      next: (res) => {
        if(res){
          this.comboParentesco = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  getParSeguros(){
    this.loading = true;
    this._parametrizacionService.getParSeguros().subscribe({
      next: (res) => {
        if(res){
          this.comboSeguro = res;
        }
      },
      error: (err) => {
        this.loading = false;
      },
      complete: ()=>{
        this.loading = false;
      }
    })
  }

  buscarPaciente(){
    if(this._mainService.form_buscar.valid){
      this.loadingSarchPaciente = true;

      let filter: PoblacionFilter = {
        tipoDocumentoId: this._mainService.form_buscar.value.tipo_documento!,
        numeroDocumento: this._mainService.form_buscar.value.numero_documento!
      }

      this._mainService.getPoblacion(filter).subscribe({
        next: (res) => {
          console.log(res)
          if(res.data.length >= 1 ){
            this._mainService.swVisiblePaciente = true
            this._mainService.pacienteSearch = res.data[0];

            let titular;

            let swHasTitular;

            if(res.data[0].titular == null || res.data[0].titular.idPaciente == null){
              titular = {
                parentesco: null
              }
              this.searchedPacienteTitular = [];
              swHasTitular = false;
            }else{
              titular = {
                parentesco: res.data[0].titular.parentescoId
              }
              this.searchedPacienteTitular = [
                {
                  nombres: res.data[0].titular.nombres,
                  primerApellido: res.data[0].titular.apellidos.split(" ")[0] ?? '',
                  segundoApellido: res.data[0].titular.apellidos.split(" ")[1] ?? '',
                  codigoAsegurado: res.data[0].titular.codigoAsegurado,
                  celular: res.data[0].titular.telefono,

                }
              ]
              swHasTitular = true;

              this._mainService.form_buscar_titular.controls['tipo_documento'].setValue(res.data[0].titular.tipoIdentificacion);
              this._mainService.form_buscar_titular.controls['numero_documento'].setValue(res.data[0].titular.identificacion);
              this.buscarPacienteTitular();

            }



            this._mainService.form_paciente.patchValue({
              personales: {
                nombres: res.data[0].nombres,
                primerApellido: res.data[0].primerApellido,
                segundoApellido: res.data[0].segundoApellido,
                tipoIdentificacion: res.data[0].tipoIdentificacionId,
                identificacion: res.data[0].identificacion,
                fechaNacimiento: new Date(res.data[0].fechaNacimiento),
                edad: res.data[0].edad,
                sexo: res.data[0].sexo_Id,
                creenciaReligiosa: res.data[0].creenciaReligiosaId,
              },
              location: {
                departamentoResidencia: res.data[0].departamentoResidencia,
                pronvinciaResidencia: res.data[0].provinciaResidencia,
                distritoResidencia: res.data[0].distritoResidencia,
                referencia: res.data[0].referencia,
                direccion: res.data[0].direccion,
              },
              contacto: {
                telefono: res.data[0].telefono,
                celular: res.data[0].celular,
                correo: res.data[0].correo
              },
              salud: {
                swHasTitular: swHasTitular,
                tipoPlan: res.data[0].tipoPlan,
                inicioVigencia: new Date(res.data[0].inicioVigencia),
                codigoAsegurado: res.data[0].codigoAsegurado,
                contratante: res.data[0].contratante,
                tipoAfiiacion: res.data[0].tipoAfiliacion,
                fechaAfiliaacion: new Date(res.data[0].fechaAfiliacion),
                planesSeguro: res.data[0].planesSeguro,
                seguro: res.data[0].seguro
              },
              titular: titular
            });
            this.getParCiudadesByDepartamentoResidencia();
          }else{
            this._mainService.swVisiblePaciente = false;
            this._mainService.pacienteSearch = null;
            this.searchedPacienteTitular = [];
            this._mainService.form_paciente.reset();
            this._mainService.form_buscar_titular.reset();
            this.showConfirmCreatePaciente();
          }
          this.activeIndex = 0;
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error buscando al paciente', icon: 'ri-close-circle-line text-2xl' });
          this.loadingSarchPaciente = false
        },
        complete: () => {
          this.loadingSarchPaciente = false
        }
      })
    }
  }

  showConfirmCreatePaciente() {
    this.confirmationService.confirm({
      message: '¿Desea crear un paciente nuevo?',
      header: 'Paciente no encontrado',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí, continuar',
      rejectLabel: 'No, cancelar',
      accept: () => {
        this._mainService.swVisiblePaciente = true;
        this._mainService.form_paciente.controls['personales'].patchValue({
          tipoIdentificacion: this._mainService.form_buscar.value.tipo_documento,
          identificacion: this._mainService.form_buscar.value.numero_documento,
        })
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.ACCEPT:
            this._mainService.swVisiblePaciente = false;
            break;
          case ConfirmEventType.CANCEL:
            this._mainService.swVisiblePaciente = false;
            break;
        }
      }
    });
  }

  buscarPacienteTitular(){
    if(this._mainService.form_buscar_titular.valid){
      this.loadingSearchTitular = true;

      let filter: PoblacionFilter = {
        tipoDocumentoId: this._mainService.form_buscar_titular.value.tipo_documento!,
        numeroDocumento: this._mainService.form_buscar_titular.value.numero_documento!
      }

      this._mainService.getPoblacionByFilter(filter).subscribe({
        next: (res) => {
          if(res.data.length >= 1){
            this.searchedPacienteTitular = res.data;
          }else{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se ha encontrado información del titular', icon: 'ri-close-circle-line text-2xl' });
          }
        },
        error: (err) => {
          this.loadingSearchTitular = false
        },
        complete: () => {
          this.loadingSearchTitular = false
        }
      })
    }
  }

  onSubmit(){

    this._mainService.form_paciente.controls['personales'].controls['edad'].enable();

    let formValues = this._mainService.form_paciente.value;

    let titular: TitularDto | null = null;

    let swIsTitular: boolean = false;

    if(formValues.salud?.swHasTitular){
      titular = {
        idPaciente: this.searchedPacienteTitular[0].id,
        parentescoId: formValues.titular?.parentesco!
      }
      swIsTitular = false;
    }else{
      swIsTitular = true;
      titular = null;
    }


    let poblacion: PoblacionDto = {
      nombres: formValues.personales?.nombres!,
      primerApellido: formValues.personales?.primerApellido!,
      segundoApellido: formValues.personales?.segundoApellido!,
      tipoIdentificacionId: formValues.personales?.tipoIdentificacion!,
      identificacion: formValues.personales?.identificacion!,
      fechaNacimiento: new Date(formValues.personales?.fechaNacimiento!),
      edad: formValues.personales?.edad!,
      sexo_Id: formValues.personales?.sexo!,
      creenciaReligiosaId: formValues.personales?.creenciaReligiosa!,
      departamentoResidencia: formValues.location?.departamentoResidencia!,
      provinciaResidencia: formValues.location?.pronvinciaResidencia!,
      distritoResidencia: formValues.location?.distritoResidencia!,
      referencia: formValues.location?.referencia!,
      direccion: formValues.location?.direccion!,
      telefono: formValues.contacto?.telefono!,
      celular: formValues.contacto?.celular!,
      correo: formValues.contacto?.correo!,
      codigoAsegurado: formValues.salud?.codigoAsegurado!,
      titular: titular,
      usuarioCreacionId: 0,
      tipoPlan: formValues.salud?.tipoPlan!,
      inicioVigencia: formValues.salud?.inicioVigencia!,
      tipoAfiliacion: formValues.salud?.tipoAfiiacion!,
      fechaAfiliacion: formValues.salud?.fechaAfiliaacion!,
      contratante: formValues.salud?.contratante!,
      seguro: formValues.salud?.seguro!,
      planesSeguro: formValues.salud?.planesSeguro!
    }
    this._mainService.form_paciente.controls['personales'].controls['edad'].disable();


    console.log(poblacion);

    this._mainService.createPaciente(poblacion).subscribe({
      next: (res) => {
        if(res.isSuccess){
          this.messageService.add({ severity: 'success', summary: 'Exito!', detail: 'Paciente guardado correctamente' });
          this._mainService.form_buscar.controls['tipo_documento'].setValue(this._mainService.form_paciente.value.personales?.tipoIdentificacion);
          this._mainService.form_buscar.controls['numero_documento'].setValue(this._mainService.form_paciente.value.personales?.identificacion);
          this.buscarPaciente();
        }else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res.exceptionMessage ?? 'Se ha presentado un error en la creación del paciente', icon: 'ri-close-circle-line text-2xl' });
        }
        console.log(res);
      },
      error: (err) => {
        this.loading = false
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.detail ?? 'Se ha presentado un error en la creación del paciente', icon: 'ri-close-circle-line text-2xl' });
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  edit(){

    this._mainService.form_paciente.controls['personales'].controls['edad'].enable();

    let formValues = this._mainService.form_paciente.value;

    let titular: TitularDto | null = null;

    let swIsTitular: boolean = false;

    if(formValues.salud?.swHasTitular){
      titular = {
        idPaciente: this.searchedPacienteTitular[0].id,
        parentescoId: formValues.titular?.parentesco!
      }
      swIsTitular = false;
    }else{
      titular = null;
      swIsTitular = true;
    }


    let poblacion: PoblacionDto = {
      id: this._mainService.pacienteSearch!.id,
      nombres: formValues.personales?.nombres!,
      primerApellido: formValues.personales?.primerApellido!,
      segundoApellido: formValues.personales?.segundoApellido!,
      tipoIdentificacionId: formValues.personales?.tipoIdentificacion!,
      identificacion: formValues.personales?.identificacion!,
      fechaNacimiento: new Date(formValues.personales?.fechaNacimiento!),
      edad: formValues.personales?.edad!,
      sexo_Id: formValues.personales?.sexo!,
      creenciaReligiosaId: formValues.personales?.creenciaReligiosa!,
      departamentoResidencia: formValues.location?.departamentoResidencia!,
      provinciaResidencia: formValues.location?.pronvinciaResidencia!,
      distritoResidencia: formValues.location?.distritoResidencia!,
      referencia: formValues.location?.referencia!,
      direccion: formValues.location?.direccion!,
      telefono: formValues.contacto?.telefono!,
      celular: formValues.contacto?.celular!,
      correo: formValues.contacto?.correo!,
      codigoAsegurado: formValues.salud?.codigoAsegurado!,
      titular: titular,
      usuarioCreacionId: 0,
      tipoPlan: formValues.salud?.tipoPlan!,
      inicioVigencia: formValues.salud?.inicioVigencia!,
      tipoAfiliacion: formValues.salud?.tipoAfiiacion!,
      fechaAfiliacion: formValues.salud?.fechaAfiliaacion!,
      contratante: formValues.salud?.contratante!,
      seguro: formValues.salud?.seguro!,
      planesSeguro: formValues.salud?.planesSeguro!
    }
    this._mainService.form_paciente.controls['personales'].controls['edad'].disable();

    console.log(poblacion);

    this._mainService.editPaciente(poblacion).subscribe({
      next: (res) => {
        if(res.isSuccess){
          this.messageService.add({ severity: 'success', summary: 'Exito!', detail: 'Paciente editado correctamente' });
          this._mainService.form_buscar.controls['tipo_documento'].setValue(this._mainService.form_paciente.value.personales?.tipoIdentificacion);
          this._mainService.form_buscar.controls['numero_documento'].setValue(this._mainService.form_paciente.value.personales?.identificacion);
          this.buscarPaciente();
        }else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res.exceptionMessage ?? 'Se ha presentado un error en la creación del paciente', icon: 'ri-close-circle-line text-2xl' });
        }
        console.log(res);
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.detail ?? 'Se ha presentado un error en la creación del paciente', icon: 'ri-close-circle-line text-2xl' });
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  openModalNotas(){
    const isMobileOrTablet = window.innerWidth <= 768;

    let width;
    if (isMobileOrTablet) {
      width = '100%';
    } else {
      width = '50%';
    }

    this.ref = this.dialogService.open(ModalNotasComponent, {
      header: 'Notas de seguimiento',
      width: width,
      contentStyle: { overflow: 'auto' },
      maximizable: false
    });

    this.ref.onClose.subscribe((response: any) => {
      if (response) {

      }
    });
  }

  calcularEdad(){
    const ahora = new Date();
    const nacimiento = new Date(this._mainService.form_paciente.value.personales?.fechaNacimiento!);

    const diferenciaMeses = ahora.getMonth() - nacimiento.getMonth() + (12 * (ahora.getFullYear() - nacimiento.getFullYear()));
    const años = Math.floor(diferenciaMeses / 12);

    this._mainService.form_paciente.controls['personales'].controls['edad'].setValue(años);
    this._mainService.form_paciente.controls['personales'].controls['edad'].disable();
  }

  validCheckTitular(event: any){
    console.log(event);
    this.searchedPacienteTitular = [];
    this._mainService.form_buscar_titular.reset();
    this._mainService.form_paciente.controls['titular'].controls['parentesco'].reset();
    this._mainService.form_paciente.controls['salud'].controls['contratante'].reset();
    this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].reset();
    this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].reset();
    this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].reset();

    if(event){
      this._mainService.form_paciente.controls['titular'].controls['parentesco'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['contratante'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['contratante'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].updateValueAndValidity();

      if (!this.items.find(item => item.card === 'titular')) {
        this.items.splice(4, 0, { label: 'Titular', card: 'titular', disabled: false });
        console.log(this.items)
      }
    }else{
      this._mainService.form_paciente.controls['titular'].controls['parentesco'].clearValidators();
      this._mainService.form_paciente.controls['titular'].controls['parentesco'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['contratante'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].setValidators([Validators.required]);

      this.items = this.items.filter(item => item.card !== 'titular');
      if (this.activeIndex === 4) {
        this.activeIndex = 3;
      } else if (this.activeIndex > 4) {
        this.activeIndex -= 1;
      }
    }
  }

  validCheckParticular(){
    this.searchedPacienteTitular = [];
    this._mainService.form_buscar_titular.reset();
    this._mainService.form_paciente.controls['titular'].controls['parentesco'].reset();
    this._mainService.form_paciente.controls['salud'].controls['tipoPlan'].reset();
    this._mainService.form_paciente.controls['salud'].controls['inicioVigencia'].reset();
    this._mainService.form_paciente.controls['salud'].controls['codigoAsegurado'].reset();
    this._mainService.form_paciente.controls['salud'].controls['contratante'].reset();
    this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].reset();
    this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].reset();
    this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].reset();

    if(this._mainService.form_paciente.value.salud?.seguro == 1){
      this._mainService.form_paciente.controls['salud'].controls['tipoPlan'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['inicioVigencia'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['codigoAsegurado'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['contratante'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].setValidators([Validators.required]);
      this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].setValidators([Validators.required]);
    }else{
      this._mainService.form_paciente.controls['salud'].controls['tipoPlan'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['tipoPlan'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['inicioVigencia'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['inicioVigencia'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['codigoAsegurado'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['codigoAsegurado'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['contratante'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['contratante'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['tipoAfiiacion'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['fechaAfiliaacion'].updateValueAndValidity();
      this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].clearValidators();
      this._mainService.form_paciente.controls['salud'].controls['planesSeguro'].updateValueAndValidity();

      console.log('clear validators', this._mainService.form_paciente)

    }
  }

}
