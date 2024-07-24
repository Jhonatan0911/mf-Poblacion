import { Component } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { Combo } from '../../models/Combo';
import { ParametrizacionService } from '../../services/parametrizacion.service';
import { NotaDto } from '../../models/Notas';
import { MessageService } from 'primeng/api';
import { MainService } from '../../services/main.service';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  user?: string;
  observacion?: string;
}

@Component({
  selector: 'app-modal-notas',
  templateUrl: './modal-notas.component.html',
  styleUrls: ['./modal-notas.component.css']
})
export class ModalNotasComponent {
  loading: boolean = false;

  events: EventItem[] = [];

  modalAddIsOpen: boolean = false;

  comboTipificaciones: Combo[] = [];

  constructor(
    public _mainService: MainService,
    public _notaService: NotasService,
    private _parametrizacionService: ParametrizacionService,
    private messageService: MessageService
  ) {
    this.getTipificacion();
    this.getNotasByPacienteId();

    this.events = [];
  }

  getTipificacion(){
    this.loading = true;
    this._parametrizacionService.getParIvr().subscribe({
      next: (res) => {
        if(res){
          this.comboTipificaciones = res;
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


  getNotasByPacienteId(){
    this.loading = true;
    this._notaService.getNotasByPacienteId(this._mainService.pacienteSearch!.id).subscribe({
      next: (res) => {
        if(res.isSuccess){
          let timelineNotas: EventItem[] = [];
          res.data.forEach(data => {
            timelineNotas.push(
              {
                status: data.ivrDescripcion,
                date: data.fechaCreacion.toString(),
                icon: 'pi pi-clock',
                color: '#0E1F60',
                user: data.usuario,
                observacion: data.observacion
              }
            )
          });
          this.events = timelineNotas
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


  showDialog() {
    this.modalAddIsOpen = true;
  }

  addNota(){
    if(this._notaService.form.valid){
      let nota: NotaDto = {
        tipificacionIVRId: this._notaService.form.value.tipificacion!,
        observacion: this._notaService.form.value.observacion!,
        pacienteId: this._mainService.pacienteSearch!.id,
        usuarioCreacionId: 1
      }

      this._notaService.createNota(nota).subscribe({
        next: (res) => {
          if(res.isSuccess){
            this.messageService.add({ severity: 'success', summary: 'Exito!', detail: 'Nota creada correctamente' });
          }
          this._notaService.form.reset();
          this.modalAddIsOpen = false;
          this.getNotasByPacienteId();
          console.log(res);
        },
        error: (err) => {
          this.loading = false
        },
        complete: () => {
          this.loading = false
        }
      })
    }
  }
}
