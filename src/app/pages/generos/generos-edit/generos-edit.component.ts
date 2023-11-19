import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Genero } from 'src/app/models/genero.model';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-generos-edit',
  templateUrl: './generos-edit.component.html',
  styleUrls: ['./generos-edit.component.scss']
})
export class GenerosEditComponent implements OnInit{

  id!: number;
  form: FormGroup = new FormGroup({});
  genero!: Genero;

  constructor(
    private readonly router: Router,
    private readonly service: GenerosService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
    });

    this.service.findById(this.id).subscribe(resp => {
      this.genero = resp
      this.form.patchValue(this.genero)
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const genero: Genero = this.form.value;
      this.service
        .update(this.id, genero)
        .pipe(
          catchError((err) => {
            this.service.showMessage(
              'Gênero não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.service.showMessage(
            'Gênero atualizado com sucesso!'
          );
          this.router.navigate(['/generos']);
        });
    } else {
      this.service.showMessage(
        'Existem campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/generos']);
  }
}
