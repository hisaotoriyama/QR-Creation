Vue.component("productList", {
  props: ["lot"],
  template: '<tr><td v-bind:id="idqr"></td><td>{{NKKK}}</td><td>{{GroupNo}}</td><td>{{TEMPNo}}</td><td>{{NW}}</td><td>{{CastNo}}</td><td>{{Si}}</td><td>{{Fe}}</td><td>{{Co}}</td></tr>',
  computed: {
    idqr: function () {
      return "qrcode-" + this.lot.NKKK + "-" + this.lot.CastNo;
    },
    NKKK: function () {
      return this.lot.NKKK;
    },
    GroupNo: function () {
      return this.lot.GroupNo;
    },
    TEMPNo: function () {
      return this.lot.TEMPNo;
    },
    NW: function () {
      return this.lot.NW;
    },
    CastNo: function () {
      return this.lot.CastNo;
    },
    Si: function () {
      return this.lot.Si;
    },
    Fe: function () {
      return this.lot.Fe;
    },
    Co: function () {
      return this.lot.Co;
    }
  },
  mounted: function () {
    let idqr = "#qrcode-" + this.lot.NKKK + "-" + this.lot.CastNo;
    $(idqr).html("");
    $(idqr).qrcode({ width: 90, height: 90, text: JSON.stringify(this.lot) })
  }
})

new Vue({
  el: "#app",
  data: {
    lists: [{
      NKKK: "8ZN1427",
      GroupNo: "A",
      TEMPNo: 168,
      NW: 1055.1,
      Producer: "Rusal",
      CastNo: 335491,
      Si: 0.02,
      Fe: 0.05,
      Co: 0.03
    },
    {
      NKKK: "8ZN1427",
      GroupNo: "A",
      TEMPNo: 169,
      NW: 1032.9,
      Producer: "Rusal",
      CastNo: 335492,
      Si: 0.03,
      Fe: 0.04,
      Co: 0.02
    },
    {
      NKKK: "8ZN1427",
      GroupNo: "A",
      TEMPNo: 170,
      NW: 1002.5,
      Producer: "Rusal",
      CastNo: 335493,
      Si: 0.02,
      Fe: 0.05,
      Co: 0.01
    },
    {
      NKKK: "8ZN1427",
      GroupNo: "A",
      TEMPNo: 171,
      NW: 1025.9,
      Producer: "Rusal",
      CastNo: 335494,
      Si: 0.03,
      Fe: 0.03,
      Co: 0.03
    }
    ]
  },
  methods: {
    createQRCode: function() {
      
    }
  }
})