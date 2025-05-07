import "../Footer/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="cont-footer">
            <div className="cub-footer">
              <i className="fa-solid fa-truck" id="ic-footer"></i>
              <h2 className="footer-h2">Առաքում</h2>
              <p className="footer-p">
                Առաքում Երևանում 24 ժամվա ընթացքում: Առաքում մարզեր մեքենայով՝ 1-ից 2 օրվա ընթացքում,
                նախապես պայմանավորվելով կայքի ադմինիստրատորի հետ: Մարզեր առաքման գումարը կախված է
                հեռավորությունից և կգանձվի տեղում առաքիչի կողմից:
              </p>
            </div>

            <div className="cub-footer">
              <i className="fa-regular fa-money-bill-1" id="ic-footer"></i>
              <h2 className="footer-h2">Վճարում</h2>
              <p className="footer-p">
                Գործում են վճարման հետևյալ եղանակները` կանխիկ և անկանխիկ առցանց վճարում՝ Telcell Wallet,
                IDRAM, MASTER CARD և VISA քարտերով: Կանխիկ վճարումները դոլարով կամ այլ արտարժույթով չեն
                ընդունվում:
              </p>
            </div>

            <div className="cub-footer">
              <i className="fa-solid fa-file-signature" id="ic-footer"></i>
              <h2 className="footer-h2">Պատվերի ընդունում</h2>
              <p className="footer-p">
                Դուք կարող եք պատվերն ուղարկել առցանց (նախօրոք գրանցվելով կայքում), ինչպես նաև
                հեռախոսազանգով՝ կապ հաստատելով մեր օպերատորի հետ:
              </p>
            </div>
          </div>
        </div>
        <div className="cont-footer2">
          <div className="cub-footer2">
            <p className="p-footer">Մեր մասին</p>
            <p className="p-footer">Առաքում և վճարում</p>
            <p className="p-footer">Օգտագործման պայմաններ</p>
            <p className="p-footer">Բլոգ</p>
          </div>
          <div className="cub-footer2">
            <p className="p-footer">Հետադարձ կապ</p>
            <i className="fa-brands fa-facebook" id="i-footer"></i>
            <p className="p-footer3">Facebook</p>
          </div>
          <div className="cub-footer2">
            <i className="fa-brands fa-telegram" id="ic-footer2"></i>
            <p className="p-footer2">Հասցե / ք․Հրազդան Միկրոշրջան 124/1</p>
            <i className="fa-solid fa-phone" id="ic-footer2"></i>
            <p className="p-footer2">+37493006545</p>
            <i className="fa-solid fa-envelope" id="ic-footer2"></i>
            <p className="p-footer2">nazaryanarman132@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
