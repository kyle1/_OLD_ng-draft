import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { PapaParseModule } from "ngx-papaparse";
import { DragDropModule } from "primeng/dragdrop";
import { TableModule } from "primeng/table";

import { AppComponent } from "./app.component";
import { DraftComponent } from "./draft.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PapaParseModule,
    DragDropModule,
    TableModule
  ],
  declarations: [AppComponent, DraftComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
