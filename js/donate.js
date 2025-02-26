$((function() {
/**
 * Fetches a list of beneficiaries, their details and displays them.
 *
 * @returns {Object} - The list of beneficiaries.
 */
  function fetchBeneficiaries() {
    allBeneficiaries = { // For Testing until endpoint is ready
      data: [
        {
          id: 1,
          name: "Ayomide Michael",
          type: "Academy",
          illness: "Colon Cancer",
          image: "../img/donate_4.webp",
          history: `Little Ayo, a vibrant seven-year-old with a smile that could light up a room, was recently diagnosed with a rare and aggressive form of childhood cancer.  Just months ago, he was a picture of health, full of energy and dreams of becoming a pilot. Now, his days are filled with doctor's visits, painful treatments, and the constant fear that the disease will progress.  The once bright spark in his eyes has dimmed, replaced by a weariness that no child should ever have to bear.  His family, devastated by the diagnosis, are struggling to cope with the emotional and financial burden of his illness.  They've exhausted their savings and are now faced with the heartbreaking reality that they may not be able to afford the life-saving treatment Ayo desperately needs.
          Ayo's best chance for recovery lies in a specialized treatment program at a leading cancer center across the country.  This program offers cutting-edge therapies and clinical trials that are not available locally, giving Ayo the hope he needs to fight this devastating disease.  However, the cost of this treatment is astronomical, far beyond what his family can afford.  They have already sold their car and other valuables, and are now facing the very real possibility of losing their home.  Despite their tireless efforts to raise funds, they are still far short of the amount needed to secure Ayo's place in the program.  Time is of the essence, as the cancer is progressing rapidly, and every day that passes diminishes Ayo's chances of survival.
          This is a desperate plea for help.  Ayo's life hangs in the balance, and his family is reaching out to the kindness of strangers for support.  Every contribution, no matter how small, will make a difference in Ayo's fight against cancer.  With your generosity, we can give Ayo the chance to live a long and healthy life, to fulfill his dreams, and to once again light up the world with his infectious smile.  Please, open your hearts and help us save Ayo.  Your compassion and support will provide hope in their darkest hour and offer a lifeline to a child who deserves a future.`
        },
        {
          id: 2,
          name: "Leonard Teressa",
          type: "Care",
          illness: "Fibromyositis",
          image: "../img/donate_5.webp",
          history: `Seven-year-old Leo is a bright, inquisitive child who loves building intricate Lego creations and dreaming of becoming an engineer.  His laughter used to fill his family's home, a constant reminder of the joy and boundless energy of childhood.  But recently, a shadow has fallen over their lives. Leo has been diagnosed with a rare genetic disorder that progressively weakens his muscles, making everyday activities like walking, playing, and even breathing increasingly difficult.  The diagnosis has been devastating, turning their world upside down and filling their days with worry and uncertainty about the future.  Leo's parents are heartbroken, watching their vibrant son slowly lose his physical abilities, knowing that without intervention, his condition will continue to deteriorate.
          The only hope for slowing the progression of Leo's disease and improving his quality of life lies in a specialized gene therapy treatment.  This groundbreaking therapy has shown promising results in clinical trials, offering the potential to significantly improve muscle function and extend the lives of children with this debilitating condition.  However, this life-changing treatment comes with a hefty price tag, far beyond the means of Leo's family. They have explored every possible avenue for financial assistance, but they are still facing a significant funding gap.  They've organized local fundraisers, reached out to charities, and exhausted their savings, yet they remain far from reaching their goal.  The window of opportunity for this treatment is closing quickly, making their need for financial support all the more urgent.
          Leo's family is now reaching out to the wider community, appealing for help to give their son a chance at a brighter future.  They are clinging to hope that with the generosity of others, they can raise the necessary funds to access this potentially life-saving treatment.  Every contribution, no matter the size, will bring them closer to their goal and offer Leo a chance to live a more fulfilling life, one where he can continue to build his Lego creations, pursue his dreams, and share his infectious laughter with the world.  Please consider donating to help Leo fight this debilitating disease and give him the future he deserves.  Your compassion and support can make a world of difference.`
        },
        {
          id: 3,
          name: "Rita Feyisara",
          type: "Care",
          illness: "Spinal Muscular Atrophy",
          image: "../img/donate_7.webp",
          history: `Five-year-old Ria is a vibrant little girl with sparkling eyes and a heart full of joy. She loves to dance, sing, and play with her dolls. But over the past few months, Ria's life has taken a difficult turn. She has become increasingly weak, her body succumbing to a debilitating disease. Doctors have diagnosed Ria with Spinal Muscular Atrophy (SMA), a complex condition that gradually weakens her muscles.  This disease threatens Ria's ability to live a normal childhood, and her family is devastated by this sudden and cruel change in their lives. They are desperately trying to find a way to help their daughter, searching for any glimmer of hope.
          Ria's best chance for survival lies in gene therapy, a cutting-edge treatment that could save her life.  However, the cost of this therapy is astronomical, far beyond what Ria's family can afford. They have already exhausted their savings, desperately trying to manage her care, but they are still far from the amount needed for this crucial treatment. Ria's parents are heartbroken, spending sleepless nights worrying about their daughter's future. They know that time is of the essence, and any delay in starting treatment could have devastating consequences for Ria's health.
          Ria's life hangs in the balance, and her family is pleading for help.  Your generosity and compassion can make all the difference. Even the smallest contribution can play a significant role in getting Ria the treatment she needs.  Please, open your hearts and help save Ria's life. Your support can bring back her smile and give her family hope in their darkest hour.  Together, we can give Ria a chance to live a full and happy life, to dance, sing, and play once more.`
        },
        {
          id: 4,
          name: "Liam Jide",
          type: "Academy",
          illness: "Leukemia",
          image: "../img/donate_6.webp",
          history: `Liam, a bright-eyed boy of eight, dreams of soaring through the skies as a pilot.  He spends hours building model airplanes, his imagination taking flight alongside them.  But Liam's dreams are grounded by a cruel reality. He's been diagnosed with a rare and aggressive form of leukemia.  Just months ago, he was a picture of health, full of boundless energy. Now, his days are consumed by hospital visits, painful chemotherapy treatments, and the constant, gnawing fear that the cancer will return.  The vibrant spark in his eyes has dimmed, replaced by a weariness that no child should ever know.  His family, devastated by the diagnosis, is struggling to cope with the emotional and financial strain of his illness, their resources stretched thin by the ongoing medical expenses.
          Liam's best chance for a long and healthy life lies in a specialized bone marrow transplant. This procedure offers him the greatest hope for a cure, but it's a complex and costly process.  While their insurance covers some of the expenses, many crucial aspects of the transplant, including donor matching, pre- and post-operative care, and rehabilitation, are not fully covered. The mounting medical bills are overwhelming, threatening to bankrupt the family and jeopardize Liam's access to this potentially life-saving treatment.  They've exhausted their savings and are now facing the agonizing prospect of not being able to afford the full course of care Liam needs.
          This is a desperate plea for help. Liam's future hangs in the balance, dependent on access to a medical procedure that can dramatically increase his chances of survival. Every contribution, no matter how small, brings them closer to their goal, closer to giving Liam the chance to pursue his dreams of flying.  Your generosity can provide hope in their darkest hour, offering a lifeline to a child who deserves a future filled with joy, laughter, and the fulfillment of his aspirations.  Please, open your hearts and help Liam take flight.  Your compassion can make all the difference.`
        },
        {
          id: 5,
          name: "Maya George",
          type: "Care",
          illness: "Malaria",
          image: "../img/donate_8.webp",
          history: `Ten-year-old Maya is a budding artist, her sketchbooks filled with vibrant drawings of fantastical creatures and breathtaking landscapes.  Her imagination knows no bounds, and she dreams of one day sharing her art with the world.  But Maya's artistic journey has been tragically interrupted. She's been diagnosed with a rare and debilitating neurological condition that progressively robs her of her motor skills.  What began as a slight tremor in her hand has now made it difficult for her to hold a pencil, brush her hair, or even button her own clothes.  The vibrant colors of her artwork are fading as her ability to create them diminishes, a heartbreaking loss for a child with such a bright future.  Her family is devastated, watching helplessly as this cruel disease steals Maya's talents and threatens her independence.
          While there's no cure for Maya's condition, there are specialized therapies and assistive devices that can help slow its progression and improve her quality of life.  These treatments can help her maintain some of her motor skills, allowing her to continue creating her art for as long as possible.  They can also provide her with tools and techniques to adapt to her changing abilities, ensuring that her artistic spirit isn't extinguished.  However, these crucial resources come at a significant cost, a burden that Maya's family cannot bear alone.  They've already spent a considerable amount on diagnostic tests and initial consultations, and the ongoing expenses of therapy and assistive technology are overwhelming.
          This is a plea for help, a desperate cry from a family facing an unimaginable challenge.  Maya's artistic future, her ability to express herself and connect with the world through her art, hangs in the balance.  Every contribution, no matter how small, brings them closer to providing Maya with the support she needs to continue her creative journey.  Your generosity can give Maya the chance to keep painting her dreams, to keep sharing her unique vision with the world.  Please, open your hearts and help Maya keep her colors alive.  Your compassion can make all the difference.`
        }
      ],
    };

    displayBeneficiaries(allBeneficiaries);
  }

  /**
   * Display a page of beneficiaries in the UI.
   *
   * @param {Beneficiary[]} allBeneficiaries - All beneficiaries to display
   * @param {number} currentPage - The current page to display
   * @param {number} beneficiariesPerPage - How many beneficiaries to display per page
   */
  function displayBeneficiaries(allBeneficiaries) {
    // Build HTML for beneficiaries
    let html = "";
    allBeneficiaries.data.forEach(beneficiary => {
      html += `
      	<div class="col-xl-10 offset-xl-1">
          <div class="upcoming-item">
            <div class="upcoming-item__aside ${beneficiary.type.toLowerCase()} ${beneficiary.type.toLowerCase()}-none"><span>${beneficiary.type}</span></div>
            <div class="upcoming-item__body ac-mobile ${beneficiary.type.toLowerCase()}-mobile">
              <div class="row align-items-center">
                <div class="col-lg-5 col-xl-3">
                  <div class="upcoming-item__img"><img class="img--bg" src=${beneficiary.image} alt="img"/></div>
                </div>
                <div class="col-lg-7 col-xl-6">
                  <div class="upcoming-item__description">
                    <h6 class="upcoming-item__title">${beneficiary.illness}</h6>
                    <p class="mini">${beneficiary.history.substring(0, 80) + "..."}</p>
                    <a href="benefactor.html">learn more</a>
                  </div>
                </div>
                <a class="align-self-center button button--${beneficiary.type.toLowerCase()} mx-auto my-3" href="#">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    $(".beneficiary").html(html);
  };

  fetchBeneficiaries(); // Initial fetch and display
}));
