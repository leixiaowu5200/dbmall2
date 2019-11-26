import Link from 'umi/link'
import styles from './test.css';

export default function (props) {
  return (
     <div className={styles.normal}>
      <div className={styles.christmas}>
        <img src='https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=155c98c1173853438ccf8027ab12b01f/2e2eb9389b504fc2f514dba8e2dde71191ef6dd7.jpg'/>
          <span>
             欢迎进入地标商城后台管理系统
          </span>
          <div className={styles.circle_box}>
           <div className={styles.round}>
                  <div className={styles.circle}><Link to="/userquery/searchProduct">商品管理</Link></div>
                  <div className={`${styles.circle_bottom} ${styles.animation}`}></div>
                  <div className={styles.circle_bottom2,styles.animation2}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}><Link to="/userquery/userquery">用户管理</Link></div>
                 <div className={`${styles.circle_bottom} ${styles.animation}`}></div>
                  <div className={styles.circle_bottom2,styles.animation2}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}><Link to="/userquery/enquirygoods">商品分类</Link><br/></div>
                 <div className={`${styles.circle_bottom} ${styles.animation}`}></div>
                  <div className={styles.circle_bottom2,styles.animation2}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}><Link to="/userquery/orderlist">订单管理</Link></div>
                 <div className={`${styles.circle_bottom} ${styles.animation}`}></div>
                  <div className={styles.circle_bottom2,styles.animation2}></div>
              </div> 
              
              {/* <div className={styles.round}>
                  <div className={styles.circle}></div>
                 <div className={styles.circle_bottom,styles.animation}></div>
                  <div className={styles.circle_bottom2,styles.animation2}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}></div>
                 <div className={styles.circle_bottom,styles.animation}></div>
                  <div className={styles.circle_bottom2,styles.animation2}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}></div>
              </div>
              <div className={styles.round}>
                  <div className={styles.circle}></div>
              </div>*/}
          </div> 
      </div>
    </div> 
  );
}
      // <div classNameName={styles.solarsys}>
      //   {/* <!--太阳--> */}
      //   <div classNameName={styles.sun}></div>

      //   {/* <!--水星轨道--> */}
      //   <div classNameName={styles.mercuryOrbit}></div>

      //   {/* <!--水星--> */}
      //   <div classNameName={styles.mercury}></div>

      //   {/* <!--金星轨道--> */}
      //   <div classNameName={styles.venusOrbit}></div>

      //   {/* <!--金星--> */}
      //   <div classNameName={styles.venus}></div>

      //   {/* <!--地球轨道--> */}
      //   <div classNameName={styles.earthOrbit}></div>

      //   {/* <!--地球--> */}
      //   <div classNameName={styles.earth}></div>

      //   {/* <!--火星轨道--> */}
      //   <div classNameName={styles.marsOrbit}></div>

      //   {/* <!--火星--> */}
      //   <div classNameName={styles.mars}></div>

      //   {/* <!--木星轨道--> */}
      //   <div classNameName={styles.jupiterOrbit}></div>

      //   {/* <!--木星--> */}
      //   <div classNameName={styles.jupiter}></div>

      //   {/* <!--土星轨道--> */}
      //   <div classNameName={styles.saturnOrbit}></div>

      //   {/* <!--土星--> */}
      //   <div classNameName={styles.saturn}></div>

      //   {/* <!--天王星轨道--> */}
      //   <div classNameName={styles.uranusOrbit}></div>

      //   {/* <!--天王星--> */}
      //   <div classNameName={styles.uranus}></div>

      //   {/* <!--海王星轨道--> */}
      //   <div classNameName={styles.neptuneOrbit}></div>

      //   {/* <!--海王星--> */}
      //   <div classNameName={styles.neptune}></div>
      // </div>
