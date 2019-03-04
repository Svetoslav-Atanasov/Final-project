import React from "react";
import styles from "./Home.module.css";

// stateful - create class
// export накуп със създаването на класа е възможно (вместо на последния ред)
export default class Home extends React.Component {
  //   state = {
  //     newAlcohol: {
  //       name: "",
  //       info: ""
  //     }
  //   };

  //   setName = event => {
  //     const value = event.target.value;
  //     // copy object [...object]

  render() {
    return (
      // всичко трябва да се намира в 1 контейнер - form в случая; иначе гърми
      <p className={styles.mainDiv}>
        
        
        iaculis lobortis. Sed interdum, ligula eu interdum commodo, nulla ante
        tincidunt eros, vel mollis est dolor nec augue. Mauris vel tellus
        vehicula leo fermentum semper. Integer sollicitudin iaculis turpis nec
        gravida. Nunc molestie enim diam, a elementum urna eleifend nec.
        Suspendisse justo sapien, pellentesque id ligula vel, imperdiet gravida
        eros. Integer metus dolor, sagittis id pulvinar ac, suscipit at tellus.
        Duis imperdiet ex id est rutrum egestas. Nullam nisi felis, sodales sit
        amet nibh sit amet, ornare viverra orci. Vivamus consequat lorem vitae
        condimentum sollicitudin. Ut laoreet sed ante quis suscipit. Etiam eget
        dolor quam. Nam tincidunt, ex a vestibulum varius, ante metus varius
        neque, a fermentum ante turpis tempor urna. Donec sollicitudin odio eget
        rhoncus tempor. Morbi consequat malesuada sapien, vitae fringilla ligula
        porttitor nec. Cras erat massa, feugiat non interdum nec, tempus eget
        nunc. Quisque luctus urna at elit accumsan, id porta sem gravida. Nam
        eget imperdiet justo. Sed odio dui, tincidunt et orci vel, vestibulum
        mollis lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur id erat ipsum. Vestibulum mattis dolor sodales convallis
        tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam interdum eu sem et accumsan. Maecenas tempus enim ut arcu
        euismod, pulvinar blandit risus feugiat. Integer cursus, justo in
        pretium aliquam, libero metus mattis massa, eu tempus orci turpis ac
        nisl. Etiam ut metus augue. In hac habitasse platea dictumst. In hac
        habitasse platea dictumst. Mauris rutrum faucibus ullamcorper. Sed
        blandit ante in pellentesque ornare. Sed varius vulputate placerat.
        Aliquam erat volutpat. Suspendisse iaculis magna quis ultricies egestas.
        In vel purus non nulla efficitur laoreet. Donec sed justo et enim
        commodo posuere. Vivamus placerat libero sit amet erat luctus bibendum.
        Fusce tincidunt metus sed massa faucibus, non sollicitudin nulla ornare.
        Nulla ac euismod lorem, at condimentum dolor. Phasellus justo magna,
        facilisis id est a, varius hendrerit orci. Mauris molestie dui a risus
        luctus iaculis non a purus. Curabitur massa nunc, tempor nec vehicula
        sit amet, interdum vitae urna. Vivamus ullamcorper euismod blandit.
        Vestibulum convallis sed arcu sed pulvinar. Integer sagittis vulputate
        volutpat. Sed sodales nulla justo, id facilisis turpis ullamcorper
        vitae. Pellentesque facilisis ornare libero ut maximus. Mauris gravida
        ullamcorper sem in varius. Cras at quam turpis. Proin in lacinia felis.
        Morbi feugiat mattis ipsum a dapibus. Aliquam lorem sapien, accumsan a
        nibh sed, rhoncus pharetra neque. Suspendisse gravida ipsum in mollis
        vestibulum. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Sed massa orci, sodales vel imperdiet
        id, cursus at purus. Nam cursus mauris tempus volutpat luctus. Cras
        cursus tortor fermentum dolor condimentum, id tincidunt dui auctor.
        Quisque non risus sem. Nunc dapibus ex quam, non consectetur neque
        efficitur at. Nunc interdum vestibulum turpis vel condimentum. Sed
        lobortis quis orci nec ullamcorper. Phasellus tempor a dolor ac
        malesuada. Aenean blandit, orci quis bibendum mattis, tortor justo
        ultrices sem, at fringilla libero diam vitae tortor. Suspendisse
        fringilla vestibulum dignissim. Aliquam finibus fermentum enim non
        bibendum. Praesent sed placerat neque. Nam bibendum nisi non libero
        iaculis lobortis. Sed interdum, ligula eu interdum commodo, nulla ante
        tincidunt eros, vel mollis est dolor nec augue. Mauris vel tellus
        vehicula leo fermentum semper. Integer sollicitudin iaculis turpis nec
        gravida. Nunc molestie enim diam, a elementum urna eleifend nec.
        Suspendisse justo sapien, pellentesque id ligula vel, imperdiet gravida
        eros. Integer metus dolor, sagittis id pulvinar ac, suscipit at tellus.
        Duis imperdiet ex id est rutrum egestas. Nullam nisi felis, sodales sit
        amet nibh sit amet, ornare viverra orci. Vivamus consequat lorem vitae
        condimentum sollicitudin. Ut laoreet sed ante quis suscipit. Etiam eget
        dolor quam. Nam tincidunt, ex a vestibulum varius, ante metus varius
        neque, a fermentum ante turpis tempor urna. Donec sollicitudin odio eget
        rhoncus tempor. Morbi consequat malesuada sapien, vitae fringilla ligula
        porttitor nec. Cras erat massa, feugiat non interdum nec, tempus eget
        nunc. Quisque luctus urna at elit accumsan, id porta sem gravida. Nam
        eget imperdiet justo. Sed odio dui, tincidunt et orci vel, vestibulum
        mollis lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur id erat ipsum. Vestibulum mattis dolor sodales convallis
        tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam interdum eu sem et accumsan. Maecenas tempus enim ut arcu
        euismod, pulvinar blandit risus feugiat. Integer cursus, justo in
        pretium aliquam, libero metus mattis massa, eu tempus orci turpis ac
        nisl. Etiam ut metus augue. In hac habitasse platea dictumst. In hac
        habitasse platea dictumst. Mauris rutrum faucibus ullamcorper. Sed
        blandit ante in pellentesque ornare. Sed varius vulputate placerat.
        Aliquam erat volutpat. Suspendisse iaculis magna quis ultricies egestas.
        In vel purus non nulla efficitur laoreet. Donec sed justo et enim
        commodo posuere. Vivamus placerat libero sit amet erat luctus bibendum.
        Fusce tincidunt metus sed massa faucibus, non sollicitudin nulla ornare.
        Nulla ac euismod lorem, at condimentum dolor. Phasellus justo magna,
        facilisis id est a, varius hendrerit orci. Mauris molestie dui a risus
        luctus iaculis non a purus. Curabitur massa nunc, tempor nec vehicula
        sit amet, interdum vitae urna. Vivamus ullamcorper euismod blandit.
        Vestibulum convallis sed arcu sed pulvinar. Integer sagittis vulputate
        volutpat. Sed sodales nulla justo, id facilisis turpis ullamcorper
        vitae. Pellentesque facilisis ornare libero ut maximus. Mauris gravida
        ullamcorper sem in varius. Cras at quam turpis. Proin in lacinia felis.
        Morbi feugiat mattis ipsum a dapibus. Aliquam lorem sapien, accumsan a
        nibh sed, rhoncus pharetra neque. Suspendisse gravida ipsum in mollis
        vestibulum. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Sed massa orci, sodales vel imperdiet
        id, cursus at purus. Nam cursus mauris tempus volutpat luctus. Cras
        cursus tortor fermentum dolor condimentum, id tincidunt dui auctor.
        Quisque non risus sem. Nunc dapibus ex quam, non consectetur neque
        efficitur at. Nunc interdum vestibulum turpis vel condimentum. Sed
        lobortis quis orci nec ullamcorper. Phasellus tempor a dolor ac
        malesuada. Aenean blandit, orci quis bibendum mattis, tortor justo
        ultrices sem, at fringilla libero diam vitae tortor. Suspendisse
        fringilla vestibulum dignissim. Aliquam finibus fermentum enim non
        bibendum. Praesent sed placerat neque. Nam bibendum nisi non libero
        iaculis lobortis. Sed interdum, ligula eu interdum commodo, nulla ante
        tincidunt eros, vel mollis est dolor nec augue. Mauris vel tellus
        vehicula leo fermentum semper. Integer sollicitudin iaculis turpis nec
        gravida. Nunc molestie enim diam, a elementum urna eleifend nec.
        Suspendisse justo sapien, pellentesque id ligula vel, imperdiet gravida
        eros. Integer metus dolor, sagittis id pulvinar ac, suscipit at tellus.
        Duis imperdiet ex id est rutrum egestas. Nullam nisi felis, sodales sit
        amet nibh sit amet, ornare viverra orci. Vivamus consequat lorem vitae
        condimentum sollicitudin. Ut laoreet sed ante quis suscipit. Etiam eget
        dolor quam. Nam tincidunt, ex a vestibulum varius, ante metus varius
        neque, a fermentum ante turpis tempor urna. Donec sollicitudin odio eget
        rhoncus tempor. Morbi consequat malesuada sapien, vitae fringilla ligula
        porttitor nec. Cras erat massa, feugiat non interdum nec, tempus eget
        nunc. Quisque luctus urna at elit accumsan, id porta sem gravida. Nam
        eget imperdiet justo. Sed odio dui, tincidunt et orci vel, vestibulum
        mollis lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur id erat ipsum. Vestibulum mattis dolor sodales convallis
        tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam interdum eu sem et accumsan. Maecenas tempus enim ut arcu
        euismod, pulvinar blandit risus feugiat. Integer cursus, justo in
        pretium aliquam, libero metus mattis massa, eu tempus orci turpis ac
        nisl. Etiam ut metus augue. In hac habitasse platea dictumst. In hac
        habitasse platea dictumst. Mauris rutrum faucibus ullamcorper. Sed
        blandit ante in pellentesque ornare. Sed varius vulputate placerat.
        Aliquam erat volutpat. Suspendisse quis bibendum mattis, tortor justo
        ultrices sem, at fringilla libero diam vitae tortor. Suspendisse
        fringilla vestibulum dignissim. Aliquam finibus fermentum enim non
        bibendum. Praesent sed placerat neque. Nam bibendum nisi non libero
        iaculis lobortis. Sed interdum, ligula eu interdum commodo, nulla ante
        tincidunt eros, vel mollis est dolor nec augue. Mauris vel tellus
        vehicula leo fermentum semper. Integer sollicitudin iaculis turpis nec
        gravida. Nunc molestie enim diam, a elementum urna eleifend nec.
        Suspendisse justo sapien, pellentesque id ligula vel, imperdiet gravida
        eros. Integer metus dolor, sagittis id pulvinar ac, suscipit at tellus.
        Duis imperdiet ex id est rutrum egestas. Nullam nisi felis, sodales sit
        amet nibh sit amet, ornare viverra orci. Vivamus consequat lorem vitae
        condimentum sollicitudin. Ut laoreet sed ante quis suscipit. Etiam eget
        dolor quam. Nam tincidunt, ex a vestibulum varius, ante metus varius
        neque, a fermentum ante turpis tempor urna. Donec sollicitudin odio eget
        rhoncus tempor. Morbi consequat malesuada sapien, vitae fringilla ligula
        porttitor nec. Cras erat massa, feugiat non interdum nec, tempus eget
        nunc. Quisque luctus urna at elit accumsan, id porta sem gravida. Nam
        eget imperdiet justo. Sed odio dui, tincidunt et orci vel, vestibulum
        mollis lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur id erat ipsum. Vestibulum mattis dolor sodales convallis
        tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam interdum eu sem et accumsan. Maecenas tempus enim ut arcu
        euismod, pulvinar blandit risus feugiat. Integer cursus, justo in
        pretium aliquam, libero metus quam turpis. Proin in lacinia felis. Morbi
        feugiat mattis ipsum a dapibus. Aliquam lorem sapien, accumsan a nibh
        sed, rhoncus pharetra neque. Suspendisse gravida ipsum in mollis
        vestibulum. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Sed massa orci, sodales vel imperdiet
        id, cursus at purus. Nam cursus mauris tempus volutpat luctus. Cras
        cursus tortor fermentum dolor condimentum, id tincidunt dui auctor.
        Quisque non risus sem. Nunc dapibus ex quam, non consectetur neque
        efficitur at. Nunc interdum vestibulum turpis vel condimentum. Sed
        lobortis quis orci nec ullamcorper. Phasellus tempor a dolor ac
        malesuada. Aenean blandit, orci quis bibendum mattis, tortor justo
        ultrices sem, at fringilla libero diam vitae tortor. Suspendisse
        fringilla vestibulum dignissim. Aliquam finibus fermentum enim non
        bibendum. Praesent sed placerat neque. Nam bibendum nisi non libero
        iaculis lobortis. Sed interdum, ligula eu interdum commodo, nulla ante
        tincidunt eros, vel mollis est dolor nec augue. Mauris vel tellus
        vehicula leo fermentum semper. habitasse platea dictumst. Mauris rutrum
        faucibus ullamcorper. Sed blandit ante in pellentesque ornare. Sed
        varius vulputate placerat. Aliquam erat volutpat. Suspendisse iaculis
        magna quis ultricies egestas. Quisque non risus sem. Nunc dapibus ex
        quam, non consectetur neque efficitur at. Nunc interdum vestibulum
        turpis vel condimentum. Sed lobortis quis orci nec ullamcorper.
        Phasellus tempor a dolor ac malesuada. Aenean blandit, orci quis
        bibendum mattis, tortor justo ultrices sem, at fringilla libero diam
        vitae tortor. Suspendisse fringilla vestibulum dignissim. Aliquam
        finibus fermentum enim non bibendum. Praesent sed placerat neque. Nam
        bibendum nisi non libero iaculis lobortis. Sed interdum, ligula eu
        interdum commodo, nulla ante tincidunt eros, vel mollis est dolor nec
        augue. Mauris vel tellus vehicula leo fermentum semper. Integer
        sollicitudin iaculis turpis nec gravida. Nunc molestie enim diam, a
        elementum urna eleifend nec. Suspendisse justo sapien, pellentesque id
        ligula vel, imperdiet gravida eros. Integer metus dolor, sagittis id
        pulvinar ac, suscipit at tellus. Duis imperdiet ex id est rutrum
      </p>
    );
  }
}
