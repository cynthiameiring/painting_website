import posingWithShoe from "./media/shoe.jpg";
import guitarFinished from "./media/Guitar-finished-resized.jpeg";
import guitar1 from "./media/guitar-detail1.jpg";
import guitar2 from "./media/guitar-detail2.jpg";
import guitar3 from "./media/guitar-detail3.jpeg";
import guitar4 from "./media/guitar-detail4.jpg";
import guitar5 from "./media/guitar-detail5.jpeg";
import indianRingFinished from "./media/Indian_ring/indianring_finished.jpg";
import indianRingFramed from "./media/Indian_ring/indianring_framed.jpg";
import indianRing1 from "./media/Indian_ring/indianring_detail1.jpg";
import indianRing2 from "./media/Indian_ring/indianring_detail2.jpg";
import indianRing3 from "./media/Indian_ring/indianring_detail3.jpg";
import indianRing4 from "./media/Indian_ring/indianring_detail4.jpg";
import indianRing5 from "./media/Indian_ring/indianring_detail5.jpg";
import indianRing6 from "./media/Indian_ring/indianring_detail6.jpg";
import indianRing7 from "./media/Indian_ring/indianring_detail7.jpg";
import greenPlantFinished from "./media/Green_plant/green_plant_finished.jpeg";
import greenPlant1 from "./media/Green_plant/green_plant_detail1.jpg";
import greenPlant2 from "./media/Green_plant/green_plant_detail2.jpg";
import greenPlant3 from "./media/Green_plant/green_plant_detail3.jpg";
import triangular_wip from "./media/Triangular/Triangulart_wip.jpeg";
import shellFinished from "./media/Shell/shell-finished.jpg";
import shell1 from "./media/Shell/shell-detail1-cropped.jpg";
import shell2 from "./media/Shell/shell-detail2.jpg";
import shell3 from "./media/Shell/shell-detail3.jpg";
import triangulart2 from "./media/Triangular/triangulart2.jpg";
import triangulart3 from "./media/Triangular/triangulart3.jpg";
import triangulart4 from "./media/Triangular/triangulart4.jpg";
import triangulart5 from "./media/Triangular/triangulart5.jpg";
import triangulartFramed from "./media/Triangular/triangulart_framed.jpg";
import diamondFinished from "./media/Diamond/diamondFinished.jpg";
import diamond1 from "./media/Diamond/diamond1.jpg";
import diamond2 from "./media/Diamond/diamond2.jpg";
import puzzledFinished from "./media/Puzzled/puzzledFinished.jpg";
import puzzledDetail2 from "./media/Puzzled/puzzledDetail2.jpg";
import puzzledDetail3 from "./media/Puzzled/puzzledDetail3.jpeg";
import puzzledDetail4 from "./media/Puzzled/puzzledDetail4.jpeg";
import nutanFinishedFrame from "./media/OrangeFlower/nutan_finished_frame.jpg";
import nutanFinished from "./media/OrangeFlower/Orange_flower_final_square.jpg";
import nutanFrameDetail from "./media/OrangeFlower/nutan_frame_detail.jpg";
import nutanWip from "./media/OrangeFlower/nutan_wip.jpg";
import nutanDetail1 from "./media/OrangeFlower/nutan_detail1.jpg";
import frameDetail1 from "./media/Frame/FrameDetail1.jpg"
import frameDetail2 from "./media/Frame/FrameDetail2.jpg"
import frameDetail3 from "./media/Frame/FrameDetail3.jpg"
import origamiSquirrelFramed from "./media/Origami_squirrel/origami_squirrel_framed.jpg"



export default {
  pages: [
    {
      id: 1,
      title: "About",
      teaserText:
        "The journey in the world of art started in 2018. In a small studio, with a painting starter kit, the first brush strokes were a fact. With a great passion for photorealism and being inspired by other contemporary artists, Cynthia created works in acrylic and oil paint. It was only in 2020 when she completely switched to coloured pencils. Based in the Netherlands, she loves to work on projects where every detail matters. To make a drawing as realistic as possible is always the main goal.",
      teaserImage: {
        url: posingWithShoe,
        alt: "Posing with Indian Shoe painting",
      },
    },
    {
      id: 2,
      title: "Contact",
      teaserText:
        "Do you have questions or are you interested in purchasing one of the available artworks? Get in touch with me to get the pricelist, shipping information and other information. Also the possibility of framing the piece can be discussed. Please contact me by sending an email to: ",
      teaserImage: {
        url: nutanFinished,
        alt: "Finished nutan flower drawing",
      },
    },
    {
      id: 3,
      title: "Artworks",
      teaserText:
        "A selection of artworks I worked on recently. Some small pieces, some big pieces, some are available and some are not. They are all made with coloured pencils on thick acid-free paper and each one took between 50 and 100 hours to make. Please check them out below and if you are interested in purchasing one, feel free to contact me by sending an email to: hello@cynthiameiring.com.",
      teaserImage: {
        url: indianRingFinished,
        alt: "Finished drawing of an Indian ring",
      },
      artworks: [
        {
          id: 9,
          title: `"Origami squirrel"`,
          status: "Sold",
          teaserImage: {
            url: origamiSquirrelFramed  ,
            alt: "Finished origami squirrel drawing",
          },
          productImages: [],
          productDetails: [
            "Certificate of Authentication is included",
            "Paper: Acid free, 640 gr/m2 paper from Fabriano Artistico",
            "Medium: Caran d'Ache Luminance coloured pencils",
            "The piece is framed behind Optium UV protective acrylic in a white wooden frame",
            "Size without frame: 350 x 350 mm",
            "Size with frame: 450 x 450 mm",
          ],
        },

        {
          id:   6,
          title: `"The one and only"`,
          status: "Available",
          teaserImage: {
            url: indianRingFinished,
            alt: "Indian ring drawing finished",
          },
          productImages: [
            {
              url: indianRingFramed,
              alt: "Indian ring framed",
            },
            {
              url: indianRing1,
              alt: "Indian ring detail picture1",
            },
            {
              url: indianRing2,
              alt: "Indian ring detail picture2",
            },
            {
              url: indianRing3,
              alt: "Indian ring detail picture3",
            },
            {
              url: indianRing4,
              alt: "Indian ring detail picture4",
            },
            {
              url: indianRing5,
              alt: "Indian ring detail picture5",
            },
            {
              url: indianRing6,
              alt: "Indian ring detail picture6",
            },
            {
              url: indianRing7,
              alt: "Indian ring detail picture7",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Paper: Acid free, 400 gr/m2 paper",
            "Medium: Caran d'Ache Luminance coloured pencils",
            "The piece is framed behind Optium UV protective acrylic in a white wooden frame",
            "Size without frame: 500 x 700 mm",
            "Size with frame: 600 x 810 mm",
          ],
        },
        {
          id: 5,
          title: `"Botanical"`,
          status: "Available",
          teaserImage: {
            url: greenPlantFinished,
            alt: "Finished plant drawing",
          },
          productImages: [
            {
              url: greenPlant1,
              alt: "Plant detail picture1",
            },
            {
              url: greenPlant2,
              alt: "Plant detail picture2",
            },
            {
              url: greenPlant3,
              alt: "Plant detail picture3",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Size without frame: 300 x 300 mm",
            "Acid free, 400 gr/m2 paper",
            "Option to include a white wooden frame",
            "A layer of fixative spray is applied to protect the artwork",
            "Material used: Caran d'Ache Luminance coloured pencils",
          ],
        },
        {
          id: 2,
          title: `"Sparkle in the sand"`,
          status: "Not for sale",
          teaserImage: {
            url: shellFinished,
            alt: "Shell painting finished",
          },
          productImages: [
            {
              url: shell2,
              alt: "Shell detail picture1",
            },
            {
              url: shell1,
              alt: "Shell detail picture2",
            },
            {
              url: shell3,
              alt: "Shell detail picture3",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Oil paint on Professional Cotton canvas",
            "White wooden frame is included",
            "Size without frame: 300 x 300 mm",
            "Size of frame: 335 x 335 x 40 mm",
            "A varnish layer is applied to protect the artwork",
          ],
        },
        {
          id: 4,
          title: `"Fado guitar"`,
          status: "Sold",
          teaserImage: {
            url: guitarFinished,
            alt: "Finished drawing of Fado guitar",
          },
          productImages: [
            {
              url: guitar3,
              alt: "Detail picture 1 of Fado guitar",
            },
            {
              url: guitar4,
              alt: "Detail picture 2 of Fado guitar",
            },
            {
              url: guitar1,
              alt: "Detail picture 3 of Fado guitar",
            },
            {
              url: guitar2,
              alt: "Detail picture 5 of Fado guitar",
            },
            {
              url: guitar5,
              alt: "Detail picture 6 of Fado guitar",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Paper: Acid free, 300 gr/m2 paper",
            "Medium: Caran d'Ache Luminance coloured pencils",
            "White wooden is frame included",
            "Size without frame: 595 x 840 mm",
            "Size with frame: 700 x 975 mm",
          ],
        },
        {
          id: 3,
          title: `"Triangulart"`,
          status: "Available",
          teaserImage: {
            url: triangulartFramed,
            alt: "Finished triangulart drawing",
          },
          productImages: [
            {
              url: triangulart2,
              alt: "Triangulart detail picture1",
            },
            {
              url: triangulart3,
              alt: "Triangulart detail picture2",
            },
            {
              url: triangulart4,
              alt: "Triangulart detail picture3",
            },
            {
              url: triangular_wip,
              alt: "Work in progress of Triangulart",
            },
            {
              url: triangulart5,
              alt: "Triangulart detail picture5",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Paper: Acid free, 400 gr/m2 paper from Fabriano Artistico",
            "Medium: Caran d'Ache Luminance coloured pencils",
            "The piece is framed behind Optium UV protective acrylic in a white wooden frame",
            "Size without frame: 500 x 700 mm",
            "Size with frame: 600 x 810 mm",
          ],
        },
        {
          id: 1,
          title: `"Puzzled"`,
          status: "Available",
          teaserImage: {
            url: puzzledFinished,
            alt: "Finished puzzled drawing",
          },
          productImages: [
            {
              url: puzzledDetail2,
              alt: "Puzzled detail picture1",
            },
            {
              url: puzzledDetail3,
              alt: "Puzzled detail picture2",
            },
            {
              url: puzzledDetail4,
              alt: "Puzzled detail picture3",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Size without frame: 350 x 350 mm",
            "Acid free, 640 gr/m2 paper from Fabriano Artistico",
            "Option to include a white wooden frame",
            "A layer of fixative spray is applied to protect the artwork",
            "Medium: Caran d'Ache Luminance coloured pencils",
          ],
        },
        {
          id: 8,
          title: `"Nutan"`,
          status: "Available",
          teaserImage: {
            url: nutanFinished,
            alt: "Finished nutan drawing",
          },
          productImages: [
            {
              url: nutanFinishedFrame,
              alt: "Nutan finished in frame",
            },
            {
              url: nutanFrameDetail,
              alt: "Nutan detail of frame",
            },
            {
              url: nutanDetail1,
              alt: "Nutan detail picture1",
            },
            {
              url: nutanWip,
              alt: "Nutan work in progress",
            },
            {
              url: frameDetail1,
              alt: "Frame detail picture1",
            },
            {
              url: frameDetail3,
              alt: "Frame detail picture3",
            },
            {
              url: frameDetail2,
              alt: "Frame detail picture2",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Paper: Acid free, 640 gr/m2 paper from Fabriano Artistico",
            "Medium: Caran d'Ache Luminance coloured pencils",
            "The piece is framed behind Optium UV protective acrylic in a white wooden frame",
            "Size without frame: 700 x 700 mm",
            "Size with frame: 800 x 800 mm",
          ],
        },
        {
          id: 7,
          title: `"Disparity"`,
          status: "Not for sale",
          teaserImage: {
            url: diamondFinished,
            alt: "Finished diamond drawing",
          },
          productImages: [
            {
              url: diamond1,
              alt: "Diamond detail picture1",
            },
            {
              url: diamond2,
              alt: "Diamond detail picture2",
            },
          ],
          productDetails: [
            "Certificate of Authentication is included",
            "Size without frame: 400 x 400 mm",
            "Acid free, 640 gr/m2 paper from Fabriano Artistico",
            "A layer of fixative spray is applied to protect the artwork",
            "Medium: Caran d'Ache Luminance coloured pencils",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Process",
      teaserText:
        "Creating a photorealistic drawing doesn't only involve a lot of patience and hours and hours of drawing. It's a whole process to come from a blank piece of paper to a realistic drawing: from finding an interesting object, creating a useful reference picture to drawing the outlines, colouring and framing the final drawing.",
      teaserImage: {
        url: "",
        alt: "",
      },
    },
    {
      id: 5,
      title: "Gallery",
      teaserText:
        "Finished, unfinished and work in progress... This photo gallery gives a glimp of the projects I enjoyed working on the most. It shows a bit of the progress and how every object arises from the paper. Step by step as it is a slow process, but.. a very enjoyable one! Every detail matters, every scribble with the pencil is important to make the final drawing as photorealistic as possible. If you would like to see more of the process, click ",
      teaserImage: {
        url: guitarFinished,
        alt: "Finished fado guitar drawing",
      },
    },
    {
      id: 6,
      title: "Commissions",
      teaserText:
        "Are you interested in a piece, but the available works don't really suit you? Then we can talk about a private commission. Together we'll discuss your wishes and the possibilities. Based on the size, difficulty and level of detail, the price will be determined of which you pay 30% at the start. The remaining part you pay once the artwork is finished (before shipment). Please keep in mind that on average it takes about 8 weeks to finish the piece. Interested? Please contact me and I will come back to you as soon as possbile.",
      teaserImage: {
        url: guitarFinished,
        alt: "Finished fado guitar drawing",
      },
    },
    {
      id: 7,
      title: "Signup",
      teaserText:
        "Be among the first to hear about all the new artworks, get early access and receive other updates. (No spam, I promise)",
      teaserImage: {
        url: "",
        alt: "",
      },
    },
    {
      id: 8,
      title: "Downloads",
      teaserText:
          "Download the outlines of my drawings and start colouring yourself! Don't forget to post a picture of your beautiful creations on Instagram and tag me (@cynthia_meiring_studio). Have fun!",
      teaserImage: {
        url: "",
        alt: "",
      },
    },
    {
      id: 9,
      title: "Ready to hang",
      teaserText:
          "Each artwork will be framed in a white wooden frame, mounted behind UV protective Optium Museum Acrylic. The frame is designed in such a way that the artwork appears to float within the frame on top of the cardboard. Because of this illusion you will gain a sense of three-dimensional depth when viewing the piece. " +
          "A steel wire is already attached on the backside of the frame, so the piece is ready to hang!",
      teaserImage: {
        url: frameDetail3,
        alt: "Detail of frame",
      },
    },
  ],
};
