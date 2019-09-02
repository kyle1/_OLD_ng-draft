import { Component, OnInit } from "@angular/core";
import { Papa } from "ngx-papaparse";
import { DragDropModule } from "primeng/dragdrop";
import { SortEvent } from "primeng/api";

@Component({
  selector: "app-draft",
  templateUrl: "./draft.component.html",
  styles: [
    `
      .sm-width {
        width: 30px;
      }

      .lg-width {
        width: 100px;
      }

      .qb {
        background-color: yellow;
      }

      .rb {
        background-color: red;
      }

      .wr {
        background-color: blue;
      }

      .te {
        background-color: green;
      }

      .kicker {
        background-color: purple;
      }

      .dst {
        background-color: pink;
      }
    `
  ]
})
export class DraftComponent implements OnInit {
  availablePlayers: any[];
  //selectedPlayers: any[][];
  draggedPlayer: any;
  draggingTeam: number;
  cols: any[];

  teams: string[];
  team1Players: any[];
  team2Players: any[];
  team3Players: any[];
  team4Players: any[];
  team5Players: any[];
  team6Players: any[];
  team7Players: any[];
  team8Players: any[];
  team9Players: any[];
  team10Players: any[];
  team11Players: any[];
  team12Players: any[];

  constructor(private papa: Papa) {}

  ngOnInit() {
    // this.cols = [
    //   { field: "Rank", header: "Rank" },
    //   { field: "Tier", header: "Tier" },
    //   { field: "Overall", header: "Player" },
    //   { field: "Team", header: "Team" },
    //   { field: "Pos", header: "Pos" },
    //   { field: "Bye", header: "Bye" },
    //   { field: "Best", header: "Best" },
    //   { field: "Worst", header: "Worst" },
    //   { field: "Avg", header: "Avg" },
    //   { field: "vs ADP", header: "vs ADP" }
    // ];
    this.cols = [];

    this.team1Players = [];
    this.team2Players = [];
    this.team3Players = [];
    this.team4Players = [];
    this.team5Players = [];
    this.team6Players = [];
    this.team7Players = [];
    this.team8Players = [];
    this.team9Players = [];
    this.team10Players = [];
    this.team11Players = [];
    this.team12Players = [];

    this.teams = [
      "Chad",
      "Kyle O",
      "Jim",
      "Andy",
      "Bowen",
      "Steven",
      "James",
      "Will",
      "Kyle T",
      "Daniel",
      "Chris",
      "Vince"
    ];
  }

  handleFileUpload(fileList) {
    var file = fileList[0];

    this.papa.parse(file, {
      header: true,
      complete: result => {
        // result["data"].forEach(function(x) {

        // });
        this.availablePlayers = result.data;
        console.log(this.availablePlayers);
        this.availablePlayers.pop();
        Object.keys(this.availablePlayers[0]).forEach(key => {
          console.log(key);
          this.cols.push({ field: key, header: key });
        });
      }
    });

    console.log(this.cols);
  }

  dragStart(event, player: any, team: number) {
    console.log("dragStart: start");
    this.draggedPlayer = player;
    console.log("dragStart: draggedPlayer set to...");
    console.log(this.draggedPlayer);

    if (team) {
      this.draggingTeam = team;
      console.log(this.draggingTeam);
    } else {
      this.draggingTeam = null;
    }
  }

  drop(event, team) {
    console.log(team);
    if (this.draggingTeam && this.draggingTeam == team) {
      console.log("drag/drop team was same");
    } else if (this.draggedPlayer) {
      let draggedPlayerIndex = this.findIndex(this.draggedPlayer);

      switch (team) {
        case 1: {
          this.team1Players = [...this.team1Players, this.draggedPlayer];
          break;
        }
        case 2: {
          this.team2Players = [...this.team2Players, this.draggedPlayer];
          break;
        }
        case 3: {
          this.team3Players = [...this.team3Players, this.draggedPlayer];
          break;
        }
        case 4: {
          this.team4Players = [...this.team4Players, this.draggedPlayer];
          break;
        }
        case 5: {
          this.team5Players = [...this.team5Players, this.draggedPlayer];
          break;
        }
        case 6: {
          this.team6Players = [...this.team6Players, this.draggedPlayer];
          break;
        }
        case 7: {
          this.team7Players = [...this.team7Players, this.draggedPlayer];
          break;
        }
        case 8: {
          this.team8Players = [...this.team8Players, this.draggedPlayer];
          break;
        }
        case 9: {
          this.team9Players = [...this.team9Players, this.draggedPlayer];
          break;
        }
        case 10: {
          this.team10Players = [...this.team10Players, this.draggedPlayer];
          break;
        }
        case 11: {
          this.team11Players = [...this.team11Players, this.draggedPlayer];
          break;
        }
        case 12: {
          this.team12Players = [...this.team12Players, this.draggedPlayer];
          break;
        }
      }

      if (this.draggingTeam == null) {
        this.availablePlayers = this.availablePlayers.filter(
          (val, i) => i != draggedPlayerIndex
        );
      } else {
        switch (this.draggingTeam) {
          case 1: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team1Players,
              this.draggedPlayer
            );
            this.team1Players = this.team1Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 2: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team2Players,
              this.draggedPlayer
            );
            this.team2Players = this.team2Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 3: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team3Players,
              this.draggedPlayer
            );
            this.team3Players = this.team3Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 4: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team4Players,
              this.draggedPlayer
            );
            this.team4Players = this.team4Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 5: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team5Players,
              this.draggedPlayer
            );
            this.team5Players = this.team5Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 6: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team6Players,
              this.draggedPlayer
            );
            this.team6Players = this.team6Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 7: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team7Players,
              this.draggedPlayer
            );
            this.team7Players = this.team7Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 8: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team8Players,
              this.draggedPlayer
            );
            this.team8Players = this.team8Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 9: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team9Players,
              this.draggedPlayer
            );
            this.team9Players = this.team9Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 10: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team10Players,
              this.draggedPlayer
            );
            this.team10Players = this.team10Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 11: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team11Players,
              this.draggedPlayer
            );
            this.team11Players = this.team11Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
          case 12: {
            let draggedPlayerIndex = this.findRosterIndex(
              this.team12Players,
              this.draggedPlayer
            );
            this.team12Players = this.team12Players.filter(
              (val, i) => i != draggedPlayerIndex
            );
            break;
          }
        }
      }

      this.draggedPlayer = null;
      this.draggingTeam = null;

      console.log(this.team1Players);
    }
  }

  dropBack(event, team, player) {
    console.log("drop back");
    if (this.draggingTeam == null) {
      return; //drag started and dropped in available players
    }
    if (this.draggedPlayer) {
      this.availablePlayers = [...this.availablePlayers, this.draggedPlayer];

      console.log("removing from team's roster");
      switch (this.draggingTeam) {
        case 1: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team1Players,
            this.draggedPlayer
          );
          this.team1Players = this.team1Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 2: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team2Players,
            this.draggedPlayer
          );
          this.team2Players = this.team2Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 3: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team3Players,
            this.draggedPlayer
          );
          this.team3Players = this.team3Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 4: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team4Players,
            this.draggedPlayer
          );
          this.team4Players = this.team4Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 5: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team5Players,
            this.draggedPlayer
          );
          this.team5Players = this.team5Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 6: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team6Players,
            this.draggedPlayer
          );
          this.team6Players = this.team6Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 7: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team7Players,
            this.draggedPlayer
          );
          this.team7Players = this.team7Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 8: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team8Players,
            this.draggedPlayer
          );
          this.team8Players = this.team8Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 9: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team9Players,
            this.draggedPlayer
          );
          this.team9Players = this.team9Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 10: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team10Players,
            this.draggedPlayer
          );
          this.team10Players = this.team10Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 11: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team11Players,
            this.draggedPlayer
          );
          this.team11Players = this.team11Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
        case 12: {
          let draggedPlayerIndex = this.findRosterIndex(
            this.team12Players,
            this.draggedPlayer
          );
          this.team12Players = this.team12Players.filter(
            (val, i) => i != draggedPlayerIndex
          );
          break;
        }
      }
      this.draggedPlayer = null;
      this.draggingTeam = null;
    }
  }

  dragEnd(event) {
    console.log("drag ended");
    this.draggedPlayer = null;
    console.log(this.team1Players);
  }

  findIndex(player: any) {
    let index = -1;
    for (let i = 0; i < this.availablePlayers.length; i++) {
      if (player.Rank === this.availablePlayers[i].Rank) {
        index = i;
        break;
      }
    }
    return index;
  }

  findRosterIndex(roster: any[], player: any) {
    let index = -1;
    for (let i = 0; i < roster.length; i++) {
      if (player.Rank === roster[i].Rank) {
        index = i;
        break;
      }
    }
    return index;
  }

  getRowStyle(player: any) {
    if (typeof player != "undefined" && typeof player.Pos != "undefined") {
      if (player.Pos.includes("QB")) {
        return { "background-color": "#F7E9A3" };
      } else if (player.Pos.includes("RB")) {
        return { "background-color": "#FDABB7" };
      } else if (player.Pos.includes("WR")) {
        return { "background-color": "#A3C8F7" };
      } else if (player.Pos.includes("TE")) {
        return { "background-color": "#BCF197" };
      } else if (player.Pos.includes("K")) {
        return { "background-color": "#B7A2CB" };
      } else {
        return { "background-color": "#FAC6F0" };
      }
    }
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];

      if (!isNaN(value1) && !isNaN(value2)) {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
      }

      let result = null;
      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === "string" && typeof value2 === "string")
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
}
