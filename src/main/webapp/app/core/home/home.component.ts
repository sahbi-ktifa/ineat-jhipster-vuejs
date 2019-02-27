import Component from 'vue-class-component';
import { Inject, Vue } from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import L from 'leaflet';
import Axios from 'axios';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

@Component({
  components: { LMap, LTileLayer, LMarker }
})
export default class Home extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;
  public marker = new L.LatLng(0, 0);

  created() {
    setInterval(() => {
      Axios.get('https://api.wheretheiss.at/v1/satellites/25544').then(res => {
        this.marker = new L.LatLng(res.data.latitude, res.data.longitude);
      });
    }, 2000);
  }

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
