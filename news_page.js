let generalHtml = 
`
<h1 style="text-decoration: underline; font-weight: bolder;">Top 3 Articles:</h1>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner"  style=" width:100%; height: 500px !important;" role="listbox">
              <div class="carousel-item active">
                <div id="article_one">
                    <h1>Mirror Online</h1>
                    <img class="news_image" src="https://i2-prod.mirror.co.uk/incoming/article29741979.ece/ALTERNATES/s1200/0_Tu95-5_east2west-news.jpg">
                    <br>
                    <a class="news_desc" href="https://www.mirror.co.uk/news/world-news/vladimir-putin-orders-two-bear-29741435">Vladimir Putin orders two 'Bear' nuclear bomber jets to border in chilling threat</a>
                    <p>"Vladimir Putin has ordered two Tu-95MS nuclear bombers to the border as part of surprise drills believed to be a new show of strength to the West. Footage shows the noisy \"Bears\" flying over Russia…"</p>
                    </div>
              </div>
              <div class="carousel-item">
                <div id="article_two">
                    <h2>OilPrice.com</h2>
                    <img class="news_image" src="https://d1o9e4un86hhpc.cloudfront.net/images/facebook-share-logo.png">
                    <br>
                    <a class="news_desc" href="https://oilprice.com/Energy/Energy-General/Fears-Of-An-Interest-Rate-Hike-Keep-Oil-Prices-Under-Pressure.html">Fears Of An Interest Rate Hike Keep Oil Prices Under Pressure</a>
                    <p>"Investors are challenging Exxon Mobil…Four of the leading oil…Living off the grid may…By Michael Kern - Apr 18, 2023, 9:30 AM CDTOil prices have started the week trending lower, with positive e…"</p>
                    </div>
              </div>
              <div class="carousel-item">
                <div id="article_three">
                    <h2>Fox News</h2>
                    <img class="news_image" src="https://static.foxnews.com/foxnews.com/content/uploads/2023/04/AP23108425555797.jpg">
                    <br>
                    <a class="news_desc" href="https://www.foxnews.com/world/poland-begins-building-electronic-barrier-russian-border-monitor-counteract-illegal-activity">Poland begins building electronic barrier at Russian border to monitor, counteract illegal activity</a>
                    <p>"Poland has begun building a state-of-the-art electronic barrier at its land border with Russias Kaliningrad exclave to monitor and counteract any illegal activity, the Polish interior minister said T…"</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <h1 style="text-decoration: underline; font-weight: bolder;">Popular News:</h1>
          <div id="popNews">  
          <div class="in">
            <h2>Resilience</h2>
            <img class="news_image" src="https://www.resilience.org/wp-content/uploads/2023/04/Cyn_zarco_in_kitchen.jpg">
            <br>
            <a class="news_desc" href="https://www.resilience.org/stories/2023-04-18/industry-knew-about-gas-stoves-air-pollution-problems-in-early-1970s/">Industry Knew About Gas Stoves’ Air Pollution Problems in Early 1970s</a>
            <p>"The American Gas Association is trying to discredit research on the health impacts of gas stoves today. But newly revealed documents show it was discussing indoor air pollution concerns five decades …"</p>
            </div>

            <div class="in">
            <h2>The Conversation Africa</h2>
            <img class="news_image" src="https://images.theconversation.com/files/521555/original/file-20230418-28-shu8td.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop">
            <br>
            <a class="news_desc" href="https://theconversation.com/south-africas-power-outages-could-reach-critical-levels-this-winter-likely-scenarios-203792">South Africa's power outages could reach critical levels this winter - likely scenarios</a>
            <p>"A worker leans on a collapsed pylon in Pretoria on April 12, 2023. Ageing infrastructure exacerbates the country's energy supply crisis. Michele Spatari/AFP via Getty ImagesOver the past 15 years S…"</p>
            </div>

            <div class="in">
            <h2>AllAfrica - Top Africa News</h2>
            <img class="news_image" src="https://cdn08.allafrica.com/static/images/structure/aa-logo-rgba-no-text-square.png">
            <br>
            <a class="news_desc" href="https://allafrica.com/stories/202304180397.html">Africa: G7 Foreign Ministers Highlight Concerns About Russia, China</a>
            <p>"Foreign ministers from the Group of Seven nations condemned Russia's war in Ukraine and highlighted the need to engage with China to address global challenges as they closed their meetings in Japan o…"</p>
            </div>

            <div class="in">
            <h2>Fox News</h2>
            <img class="news_image" src="https://static.foxnews.com/foxnews.com/content/uploads/2023/04/AP23108379909743.jpg">
            <br>
            <a class="news_desc" href="https://www.foxnews.com/world/climate-activists-announce-plans-protest-berlin-try-peacefully-bring-city-standstill">Climate activists announce plans to protest in Berlin, will try to 'peacefully bring the city to a standstill'</a>
            <p>"Climate activists said Tuesday that they will stage further protests in Berlin in an effort to force the German government into doing more to curb global warming.The announcement came as courts are…"</p>
            </div>

            <div class="in">
            <h2>Science Daily</h2>
            <img class="news_image" src="https://www.sciencedaily.com/images/scidaily-icon.png">
            <br>
            <a class="news_desc" href="https://www.sciencedaily.com/releases/2023/04/230418101434.htm">Teasing strange matter from the ordinary</a>
            <p>"In a unique analysis of experimental data, nuclear physicists have made the first-ever observations of how lambda particles, so-called \"strange matter,\" are produced by a specific process called semi…"</p>
            </div>

            <div class="in">
            <h2>La Nacion</h2>
            <img class="news_image" src="https://resizer.glanacion.com/resizer/gKTiQfs4sBIyqbbINPnSPSoEMSs=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/UL6UHILANJDSTELSH5KMJZGY4I.JPG">
            <br>
            <a class="news_desc" href="https://www.lanacion.com.ar/el-mundo/tension-entre-brasil-y-eeuu-lula-esta-siendo-ingenuo-o-es-un-megalomano-nid18042023/">Tensión entre Brasil y EE.UU.: ¿Lula está siendo ingenuo o es un megalómano?</a>
            <p>"RÍO DE JANEIRO. ¿El presidente Lula es ingenuo o megalómano? Para la revista británica The Economist varios diarios de Estados Unidos, la posibilidad de que el presidente brasileño sea ingenuo por tr…"</p>
            </div>

            <div class="in">
            <h2>Yahoo Entertainment</h2>
            <img class="news_image" src="https://media.zenfs.com/en/prnewswire.com/f98c16b19d88e091d02a9786ddea49a8">
            <br>
            <a class="news_desc" href="https://finance.yahoo.com/news/cop28-president-designate-concludes-high-140700402.html">COP28 President-Designate concludes high level visit to China with common understanding for step change to help achieve transformational climate progress at COP28</a>
            <p>"COP28 President-Designate, Dr. Sultan Al Jaber, concluded a two-day trip to China, where he held a series of bilateral meetings, including with Ding Xuexiang, First Vice Premier of China; Zhao Chenxi…"</p>
            </div>

            <div class="in">
            <h2>Fox News</h2>
            <img class="news_image" src="https://static.foxnews.com/foxnews.com/content/uploads/2023/02/GettyImages-971756924.jpg">
            <br>
            <a class="news_desc" href="https://www.foxnews.com/politics/non-binary-ex-biden-official-sam-brinton-agrees-undergo-mental-health-evaluation-baggage-theft-case">Non-binary ex-Biden official Sam Brinton agrees to undergo mental health evaluation in baggage theft case</a>
            <p>"Sam Brinton, a non-binary former senior Department of Energy (DOE) official, agreed in court Monday to undergo a mental health evaluation as part of an adult diversion program.Brinton agreed to ent…"</p>
            </div>

            <div class="in">
            <h2>Forbes</h2>
            <img class="news_image" src="https://imageio.forbes.com/specials-images/imageserve/643864a9e1702ed58421d3e8/0x0.jpg?format=jpg&width=1200">
            <br>
            <a class="news_desc" href="https://www.forbes.com/sites/garydrenik/2023/04/18/how-data-drives-innovation-in-healthcare/">How Data Drives Innovation In Healthcare</a>
            <p>"HealthTechJackie Niam - stock.adobe.comI recently spoke with Victor Brown, founder &amp; CEO of Xcellent Life Inc. In this interview, we explore Victors journey to founding Xcellent Life and how …"</p>
            </div>

            <div class="in">
            <h2>Plos.org</h2>
            <img class="news_image" src="https://journals.plos.org/plosone/article/figure/image?id=10.1371/journal.pone.0282715.g004&size=inline">
            <br>
            <a class="news_desc" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0282715">Investigating the use of pollen DNA metabarcoding to quantify bee foraging and effects of threshold selection</a>
            <p>"AbstractDNA metabarcoding of pollen is a useful tool for studying bee foraging ecology. However, several questions about this method remain unresolved, including the extent to which sequence read d…"</p>
            </div>

            <div class="in">
            <h2>Plos.org</h2>
            <img class="news_image" src="https://journals.plos.org/plosone/article/figure/image?id=10.1371/journal.pone.0284587.g006&size=inline">
            <br>
            <a class="news_desc" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0284587">Population genomics of fall armyworm by genotyping-by-sequencing: Implications for pest management</a>
            <p>"Citation: Ishizuka TK, Cordeiro EMG, Alves-Pereira A, de Araújo Batista CE, Murúa MG, Pinheiro JB, et al. (2023) Population genomics of fall armyworm by genotyping-by-sequencing: Implications for pes…"</p>
            </div>

            <div class="in">
            <h2>Freerepublic.com</h2>
            <img class="news_image" src="null">
            <br>
            <a class="news_desc" href="https://freerepublic.com/focus/f-news/4146428/posts">Thieving 'Non-Binary' Biden Official Was Still Paid Taxpayer-Funded Six-Figure Salary While Facing Felony</a>
            <p>"Skip to comments.Thieving 'Non-Binary' Biden Official Was Still Paid Taxpayer-Funded Six-Figure Salary While Facing FelonyTownhall ^ | April 18, 2023 | Mia CathellPosted on 04/18/2023 6:57:41…"</p>
            </div>

            <div class="in">
            <h2>Haaretz</h2>
            <img class="news_image" src="https://img.haarets.co.il/bs/00000187-9496-dc6c-a5ff-ffd7a6ea0000/f5/04/eb25baaa435bbb202b9a6bd6e961/50241-1.jpg?precrop=2400,1395,x0,y19&height=630&width=1200">
            <br>
            <a class="news_desc" href="https://www.haaretz.com/israel-news/2023-04-18/ty-article/china-offers-to-facilitate-israel-palestinian-peace-talks/00000187-9486-dc6c-a5ff-ffd7a12e0000">China offers to facilitate Israel-Palestinian peace talks</a>
            <p>"China's foreign minister told his Israeli and Palestinian counterparts that his country is ready to help facilitate peace talks between the two sides, in its latest effort at mediation in the region.…"</p>
            </div>

            <div class="in">
            <h2>Autoblog</h2>
            <img class="news_image" src="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://media.zenfs.com/en/insider_articles_922/ee1ab7aa63433f119d48e0fb3d971a54">
            <br>
            <a class="news_desc" href="https://www.autoblog.com/2023/04/18/advanced-ai-keeps-sundar-pichai-up-at-night-and-makes-sam-altman-a-bit-scared-here-s-why-some-tech-execs-are-wary-of-its-potential-dangers/">Advanced AI keeps Sundar Pichai up at night and makes Sam Altman a bit scared. Here's why some tech execs are wary of its potential dangers.</a>
            <p>"Sam Altman and Sundar Pichai.  Ramin Talaie/Getty Images and Kimberly White/Getty Images for GLAADThe tech world's obsession with generative artificial intelligence shows no signs of cooling off.…"</p>
            </div>

            <div class="in">
            <h2>DW (English)</h2>
            <img class="news_image" src="https://static.dw.com/image/65310400_6.jpg">
            <br>
            <a class="news_desc" href="https://www.dw.com/en/germany-keeps-searching-for-a-common-china-strategy/a-65360892">Germany keeps searching for a common China strategy</a>
            <p>"It's been another busy week for Germany's foreign minister, Annalena Baerbock. The Green Party official is one of the country's leading voices calling for a robust policy towards China. Meeting with …"</p>
            </div>

            <div class="in">
            <h2>Daily Mail</h2>
            <img class="news_image" src="https://i.dailymail.co.uk/1s/2023/04/18/14/69959285-0-image-a-68_1681825674456.jpg">
            <br>
            <a class="news_desc" href="https://www.dailymail.co.uk/news/article-11985921/G7-condemns-Chinas-militarisation-activities-sparking-furious-reaction-Beijing.html">G7 condemns China's 'militarisation activities' - sparking furious reaction from Beijing</a>
            <p>"G7 foreign ministers warned today that it would inflict 'severe costs' on those helping Russia wage war in Ukraine and put Beijing on notice over its 'militarisation activities' in the South China Se…"</p>
            </div>

            <div class="in">
            <h2>Mit.edu</h2>
            <img class="news_image" src="https://news.mit.edu/sites/default/files/images/202304/MIT-Energy-Conference-01-press.jpg">
            <br>
            <a class="news_desc" href="https://news.mit.edu/2023/mit-energy-conference-grapples-geopolitics-0418">MIT Energy Conference grapples with geopolitics</a>
            <p>"As Russias war in Ukraine rages on, this years MIT Energy Conference spotlighted the role of geopolitics in the worlds efforts to lower greenhouse gas emissions and mitigate the worst effects of clim…"</p>
            </div>
        </div>
`;

let nuclearHtml = 
`
<h1 style="text-decoration: underline; font-weight: bolder;">Top 3 Articles:</h1>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner"  style=" width:100%; height: 500px !important;" role="listbox">
              <div class="carousel-item active">
                <div id="article_one">
                
                <h1 class="news_header">Google News</h1>
                <img class="news_image" src="null">
                <br>
                <a class="news_desc" href="https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9wdXRpbi12aXNpdHMtdHdvLXJlZ2lvbnMtdWtyYWluZS1nNy1jb25kZW1uLW51Y2xlYXItcGxhbi0yMDIzLTA0LTE4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1">Putin visits two regions in Ukraine as G7 condemn nuclear plan - Reuters</a>
                <p class="news_p_first">"We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde…"</p>
                </div>
              </div>
              <div class="carousel-item">
                <div id="article_two">
                <div>
                <h1 class="news_header">Google News</h1>
                <img class="news_image" src="null">
                <br>
                <a class="news_desc" href="https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2c3LW1pbmlzdGVycy1zbGFtLXJ1c3NpYXMtbnVjbGVhci1yaGV0b3JpYy1jYWxsLWNoaW5hLWltcHJvdmUtYmVoYXZpb3VyLTIwMjMtMDQtMTgv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1">G7 ministers slam Russia's 'nuclear rhetoric', call on China to ... - Reuters</a>
                <p class="news_p_first">"We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde…"</p>
                </div>
                    </div>
              </div>
              <div class="carousel-item">
                <div id="article_three">
                <div>
                <h1 class="news_header">The Guardian</h1>
                <img class="news_image" src="https://i.guim.co.uk/img/media/b5731292ceb0616a24f6d25daa900fcc4a2beb9f/0_169_5000_3001/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5ca6f287b4475060c97851dc62608484">
                <br>
                <a class="news_desc" href="https://www.theguardian.com/world/2023/apr/18/china-ready-to-broker-israel-palestine-peace-talks-says-foreign-minister">China ready to broker Israel-Palestine peace talks, says foreign minister</a>
                <p class="news_p_first">"Chinas foreign minister told his Israeli and Palestinian counterparts his country is ready to help facilitate peace talks, state media reported.The separate phone calls between Chinese foreign mini…"</p>
                </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <h1 style="text-decoration: underline; font-weight: bolder;">Popular News:</h1>
          <div id="popNews">
          <div class="in">
          <h2>Slate Magazine</h2>
          <img class="news_image" src="https://compote.slate.com/images/fd09b4b6-f7fd-4b71-855b-0fb14d554539.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560">
          <br>
          <a class="news_desc" href="https://slate.com/news-and-politics/2023/04/dianne-feinstein-senate-judiciary-republicans.html">The Dianne Feinstein Saga Has a Strange New Twist</a>
          <p>"We are now in week two of the Dianne Feinstein saga, in which Democrats willingness to jeopardize their own agenda to accommodate the ailing, absentee senator will be on full display.Sen. Chuck Sch…"</p>
          </div>

          <div class="in">
          <h2>Proofinprogress.com</h2>
          <img class="news_image" src="null">
          <br>
          <a class="news_desc" href="https://proofinprogress.com/posts/2023-04-18/my-response-to-pirate-wires-nuclear-disasters.html">My Deleted Response to Pirate Wires' Nuclear Disasters</a>
          <p>"proofinprogress.comI wrote a long comment to a recent post of Mike Solana titled \"NuclearDisasters.\" To my surpriseMike deleted it promptly with the following message:this wasn't framed as br…"</p>
          </div>

          <div class="in">
          <h2>The Washington Post</h2>
          <img class="news_image" src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J4LQV5DVGSCLTFSJRZYFHUGSKY_size-normalized.jpg&w=1440">
          <br>
          <a class="news_desc" href="https://www.washingtonpost.com/climate-solutions/2023/04/13/morocco-europe-solar-desert/">Europe needs energy. Moroccan solar may be a clean solution</a>
          <p>"Comment on this storyCommentThe abundant sun of northern Africa may soon power Europes homes and businesses, as European leaders consider connecting massive North African solar projects to unders…"</p>
          </div>

          <div class="in">
          <h2>Autoblog</h2>
          <img class="news_image" src="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://media.zenfs.com/en/insider_articles_922/ee1ab7aa63433f119d48e0fb3d971a54">
          <br>
          <a class="news_desc" href="https://www.autoblog.com/2023/04/18/advanced-ai-keeps-sundar-pichai-up-at-night-and-makes-sam-altman-a-bit-scared-here-s-why-some-tech-execs-are-wary-of-its-potential-dangers/">Advanced AI keeps Sundar Pichai up at night and makes Sam Altman a bit scared. Here's why some tech execs are wary of its potential dangers.</a>
          <p>"Sam Altman and Sundar Pichai.  Ramin Talaie/Getty Images and Kimberly White/Getty Images for GLAADThe tech world's obsession with generative artificial intelligence shows no signs of cooling off.…"</p>
          </div>

          <div class="in">
          <h2>Theregister.com</h2>
          <img class="news_image" src="https://regmedia.co.uk/2023/02/06/power_shutterstock.jpg">
          <br>
          <a class="news_desc" href="https://www.theregister.com/2023/04/18/access_to_cheap_reliable_power/">European datacenters worried they can't get cheap, reliable juice</a>
          <p>"European datacenter operators are finding it harder to secure reliable, cost-effective power, according to a report by British electricity biz Aggreko has asserted.The vendor conducted a survey"</p>
          </div>

          <div class="in">
          <h2>Ritholtz.com</h2>
          <img class="news_image" src="https://ritholtz.com/wp-content/uploads/2023/02/Mib-tile.png">
          <br>
          <a class="news_desc" href="https://ritholtz.com/2023/04/transcript-joe-barratta/">Transcript: Joe Barratta of Blackstone</a>
          <p>"The transcript from this weeks, MiB: Joe Barratta, Blackstone’s Global Head of Private Equity, is below.You can stream and download our full conversation, including any podcast extras, iTunes, Spot…"</p>
          </div>

          <div class="in">
          <h2>TMZ</h2>
          <img class="news_image" src="https://imagez.tmz.com/image/24/16by9/2023/04/18/24c668c91d6641a0a9f37a9269b2d92f_xl.jpg">
          <br>
          <a class="news_desc" href="https://www.tmz.com/2023/04/18/vanderpump-rules-tom-sandoval-arizona-miraval-resorts-cheating/">'Vanderpump Rules' Tom Sandoval Goes Nuclear on Arizona Resort</a>
          <p>"When it rains it pours and, for Tom Sandoval, that just means more and more drama.The \"Vanderpump Rules\" star took his seemingly never-ending cheating saga to Instagram Monday night and blasted Mir…"</p>
          </div>

          <div class="in">
          <h2>IndieWire</h2>
          <img class="news_image" src="https://www.indiewire.com/wp-content/uploads/2023/04/Downtown-Owls.png?w=780">
          <br>
          <a class="news_desc" href="https://www.indiewire.com/2023/04/2023-tribeca-film-festival-lineup-1234829144/">2023 Tribeca Film Festival Lineup Includes ‘Downtown Owl,’ ‘Fresh Kills’ Premieres</a>
          <p>"The 2023 Tribeca Festival feature film lineup has been unveiled.This year’s festival takes place June 7 — 18 and includes a range of feature narrative, documentary, and animated films. The 2023 Tri…"</p>
          </div>

          <div class="in">
          <h2>Al Jazeera English</h2>
          <img class="news_image" src="https://www.aljazeera.com/wp-content/uploads/2023/04/2023-04-18T020313Z_629155627_RC2PG0AYFUYS_RTRMADP_3_G7-JAPAN-FM-1681796405.jpg?resize=1920%2C1440">
          <br>
          <a class="news_desc" href="https://www.aljazeera.com/news/2023/4/18/g7-ministers-pledge-to-intensify-russia-sanctions-slam-china">G7 ministers pledge to intensify Russia sanctions, slam China</a>
          <p>"The foreign ministers of G7 have pledged to intensify sanctions against Russia over its war in Ukraine and criticised China for its actions in the Taiwan Strait and disputed South China Sea, urging B…"</p>
          </div>

          <div class="in">
          <h2>Al Jazeera English</h2>
          <img class="news_image" src="https://www.aljazeera.com/wp-content/uploads/2023/04/33DD36V-highres-1681776423.jpg?resize=1920%2C1440">
          <br>
          <a class="news_desc" href="https://www.aljazeera.com/news/2023/4/18/russia-ukraine-war-list-of-key-events-day-419">Russia-Ukraine war: List of key events, day 419</a>
          <p>"Here is the situation on Tuesday, April 18, 2023:Fighting<ul><li>Moscow said Wagner mercenary units captured more areas of Bakhmut as fighting continues in the ruined eastern city.</li><li>Russia…"</p>
          </div>

          <div class="in">
          <h2>Phys.Org</h2>
          <img class="news_image" src="https://scx2.b-cdn.net/gfx/news/hires/2023/ocean.jpg">
          <br>
          <a class="news_desc" href="https://phys.org/news/2023-04-nuclear-treaty-hydrophones-ocean-temperatures.html">Nuclear test ban treaty hydrophones help monitor ocean temperatures</a>
          <p>"Ocean-based hydrophones in the Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO)'s seismic-acoustic monitoring network could provide a better look at how ocean temperatures are changing over…"</p>
          </div>

          <div class="in">
          <h2>Phys.Org</h2>
          <img class="news_image" src="https://scx2.b-cdn.net/gfx/news/hires/2023/teasing-strange-matter.jpg">
          <br>
          <a class="news_desc" href="https://phys.org/news/2023-04-strange-ordinary.html">Teasing strange matter from the ordinary</a>
          <p>"In a unique analysis of experimental data, nuclear physicists have made the first-ever observations of how lambda particles, so-called \"strange matter,\" are produced by a specific process called semi…"</p>
          </div>

          <div class="in">
          <h2>Deadline</h2>
          <img class="news_image" src="https://deadline.com/wp-content/uploads/2023/04/Tribeca-Festival-2023-Logo.png.jpg?w=1000">
          <br>
          <a class="news_desc" href="https://deadline.com/2023/04/2023-tribeca-festival-film-lineup-1235328744/">Tribeca Festival’s 2023 Film Lineup Includes Maggie Moore(s)’ With Tina Fey & Jon Hamm, ‘First Time Female Director’, Marvel’s ‘Stan Lee’ Doc, More</a>
          <p>"The 22nd edition of the Tribeca Festival unveiled a 2023 lineup with a record number of female helmers and heavy on films directed by actors like Chelsea Peretti’s First Time Female Director, John Sl…"</p>
          </div>

          <div class="in">
          <h2>The New Republic</h2>
          <img class="news_image" src="https://images.newrepublic.com/edbf7da29ce50a962ae855ed2e2358faef822462.jpeg?w=1109&h=577&crop=faces&fit=crop&fm=jpg">
          <br>
          <a class="news_desc" href="https://newrepublic.com/article/171772/jimmy-carter-environmentalism-went-wrong">Is Jimmy Carter Where Environmentalism Went Wrong?</a>
          <p>"Carters early decision to let Nixon-era price controls expire, for instanceand refusal to return to that tool laterwas remembered even by his advisors as one of the administrations worst mistakes. Ch…"</p>
          </div>

          <div class="in">
          <h2>The Guardian</h2>
          <img class="news_image" src="https://i.guim.co.uk/img/media/0d3de4771f9da732c3a9a368d3a2eb323aaa68ae/120_0_1800_1080/master/1800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e8013ded95ea44263e472c5d58920933">
          <br>
          <a class="news_desc" href="https://www.theguardian.com/us-news/2023/apr/18/first-thing-west-prepares-for-putin-to-use-whatever-tools-hes-got-left-in-ukraine">West prepares for Putin to use ‘whatever tools he’s got left’ in Ukraine | First Thing</a>
          <p>"Good morning.Western leaders are preparing for Vladimir Putin to use whatever tools he has got left including nuclear threats and cyber-attacks in response to an expected Ukrainian counteroffensive…"</p>
          </div>

          <div class="in">
          <h2>Forbes</h2>
          <img class="news_image" src="https://imageio.forbes.com/specials-images/imageserve/643e80955dba78cb57052dee/0x0.jpg?format=jpg&width=1200">
          <br>
          <a class="news_desc" href="https://www.forbes.com/sites/davidblackmon/2023/04/18/placing-bets-in-the-global-energy-casino/">Placing Bets In The Global Energy Casino</a>
          <p>"BERLIN, GERMANY - MAY 26: John Kerry, Special Presidential Envoy for Climate, speaks during the ...welcome by the Federal Environment Minister and the Federal Climate Protection Minister before …"</p>
          </div>

          <div class="in">
          <h2>Forbes</h2>
          <img class="news_image" src="https://imageio.forbes.com/specials-images/imageserve/643864a9e1702ed58421d3e8/0x0.jpg?format=jpg&width=1200">
          <br>
          <a class="news_desc" href="https://www.forbes.com/sites/garydrenik/2023/04/18/how-data-drives-innovation-in-healthcare/">How Data Drives Innovation In Healthcare</a>
          <p>"HealthTechJackie Niam - stock.adobe.comI recently spoke with Victor Brown, founder &amp; CEO of Xcellent Life Inc. In this interview, we explore Victors journey to founding Xcellent Life and how …"</p>
          </div>
          </div>
`;

let quantumHtml = 
`
<h1 style="text-decoration: underline; font-weight: bolder;">Top 3 Articles:</h1>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner"  style=" width:100%; height: 500px !important;" role="listbox">
              <div class="carousel-item active">
                <div id="article_one">
                <div>
            <h1 class="news_header">Nature.com</h1>
            <img class="news_image" src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41586-023-05867-2/MediaObjects/41586_2023_5867_Fig1_HTML.png">
            <br>
            <a class="news_desc" href="https://www.nature.com/articles/s41586-023-05867-2">Quantum critical dynamics in a 5,000-qubit programmable spin glass</a>
            <p class="news_p_first">"<li>Brooke, J., Bitko, D., Rosenbaum, T. F. &amp; Aeppli, G. Quantum annealing of a disordered magnet. Science284, 779781 (1999).Article  CAS  PubMed Google Scholar </li><li>Aeppli, G. &amp…"</p>
            </div>

                </div>
              </div>
              <div class="carousel-item">
                <div id="article_two">
                <div>
            <h1 class="news_header">Phys.Org</h1>
            <img class="news_image" src="https://scx2.b-cdn.net/gfx/news/hires/2023/the-quantum-spin-liqui-1.jpg">
            <br>
            <a class="news_desc" href="https://phys.org/news/2023-04-quantum-liquid-isnt.html">The quantum spin liquid that isn't one</a>
            <p class="news_p_first">"For two decades, it was believed that a possible quantum spin liquid was discovered in a synthetically produced material. In this case, it would not follow the laws of classical physics even on a mac…"</p>
            </div>

                    </div>
              </div>
              <div class="carousel-item">
                <div id="article_three">
                <div>
            <h1 class="news_header">Phys.Org</h1>
            <img class="news_image" src="https://scx2.b-cdn.net/gfx/news/2023/quantum-liquid-becomes-1.jpg">
            <br>
            <a class="news_desc" href="https://phys.org/news/2023-04-quantum-liquid-solid.html">Quantum liquid becomes solid when heated</a>
            <p class="news_p_first">"Solids can be melted by heating, but in the quantum world it can also be the other way around: In a joint effort, an experimental team led by Francesca Ferlaino in Innsbruck, Austria, and a theoretic…"</p>
            </div>

                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <h1 style="text-decoration: underline; font-weight: bolder;">Popular News:</h1>
          <div id="popNews">
          <div class="in">
          <h2>Phys.Org</h2>
          <img class="news_image" src="https://scx2.b-cdn.net/gfx/news/hires/2023/teasing-strange-matter.jpg">
          <br>
          <a class="news_desc" href="https://phys.org/news/2023-04-strange-ordinary.html">Teasing strange matter from the ordinary</a>
          <p>"In a unique analysis of experimental data, nuclear physicists have made the first-ever observations of how lambda particles, so-called \"strange matter,\" are produced by a specific process called semi…"</p>
          </div>

          <div class="in">
          <h2>Forbes</h2>
          <img class="news_image" src="https://imageio.forbes.com/specials-images/imageserve/643e988fcef5fdc01d0990c5/0x0.jpg?format=jpg&crop=2629,1477,x0,y0,safe&width=1200">
          <br>
          <a class="news_desc" href="https://www.forbes.com/sites/forbestechcouncil/2023/04/18/15-significant-ways-quantum-computing-could-soon-impact-society/">15 Significant Ways Quantum Computing Could Soon Impact Society</a>
          <p>"gettyMany of us are awed by what technology can do today, but quantum computing is poised to make exponential changes to a multitude of functions across industries and entities, which could radical…"</p>
          </div>

          <div class="in">
          <h2>Nature.com</h2>
          <img class="news_image" src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41467-023-37931-w/MediaObjects/41467_2023_37931_Fig1_HTML.png">
          <br>
          <a class="news_desc" href="https://www.nature.com/articles/s41467-023-37931-w">Causal structure of interacting Weyl fermions in condensed matter systems</a>
          <p>"We start from an inversion-symmetry breaking model with four Weyl quasiparticles in the first Brillouin zone (BZ)</p>
          </div>

          <div class="in">
          <h2>Nature.com</h2>
          <img class="news_image" src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41467-023-37380-5/MediaObjects/41467_2023_37380_Fig1_HTML.png">
          <br>
          <a class="news_desc" href="https://www.nature.com/articles/s41467-023-37380-5">Observation of phonon Poiseuille flow in isotopically purified graphite ribbons</a>
          <p>"<li>Wilson, R. &amp; Cahill, D. G. Anisotropic failure of fourier theory in time-domain thermoreflectance experiments. Nat. Commun.5, 5075 (2014).Article  ADS  CAS  PubMed Google Scholar …"</p>
          </div>

          <div class="in">
          <h2>Americanthinker.com</h2>
          <img class="news_image" src="https://www.americanthinker.com/images/bucket/2023-04/245455.jpg">
          <br>
          <a class="news_desc" href="https://www.americanthinker.com/articles/2023/04/put_some_clothes_on_your_daughter.html">Put Some Clothes On Your Daughter!</a>
          <p>"As the seasons change and the weather warms, American adults are yet again being subjected to the uncomfortable spectacle of teenage girls wearing outfits more befitting a runway show than a school, …"</p>
          </div>

          <div class="in">
          <h2>Nature.com</h2>
          <img class="news_image" src="null">
          <br>
          <a class="news_desc" href="https://www.nature.com/articles/s41593-023-01328-1">Author Correction: A consensus protocol for functional connectivity analysis in the rat brain</a>
          <p>"<li>Donders Institute for Brain, Behaviour, and Cognition, Radboud University, Nijmegen, The NetherlandsJoanes Grandjean, Eveline Gelderman, Chao C. G. Guo, Marloes J. A. G. Henckens, Nita Hofwijks…"</p>
          </div>

          <div class="in">
          <h2>Harpers.org</h2>
          <img class="news_image" src="https://harpers.org/wp-content/uploads/2020/03/5-Weekly-Review-FINAL.jpg">
          <br>
          <a class="news_desc" href="https://harpers.org/2023/04/weekly-review-joe-biden-ireland-jack-teixeira-desantis-trump-pudding/">Weekly Review</a>
          <p>"The 14th Dalai Lama, the 87-year-old spiritual leader of Tibet, apologized for telling a boy to suck his tongue.12The 46th U.S. president, 80-year-old Joe Biden, received a standing ovation after enc…"</p>
          </div>

          <div class="in">
          <h2>Quanta Magazine</h2>
          <img class="news_image" src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2023/04/HigherFormSymmetries-bySamuelVelasco-Default.webp">
          <br>
          <a class="news_desc" href="https://www.quantamagazine.org/a-new-kind-of-symmetry-shakes-up-physics-20230418/">A New Kind of Symmetry Shakes Up Physics</a>
          <p>"Seiberg and his colleagues imagined the one-dimensional string as being surrounded by a surface, a two-dimensional plane, so that it looked like a line drawn on a sheet of paper. Instead of measuring…"</p>
          </div>

          <div class="in">
          <h2>Aps.org</h2>
          <img class="news_image" src="https://physics.aps.org/assets/3633267b-7095-4215-aaf8-e99300803c6f/e64_1_thumb.png">
          <br>
          <a class="news_desc" href="https://physics.aps.org/articles/v16/64">Research News: A New Card up Graphene’s Sleeve</a>
          <p>"Artist's representation of the hexagonal structure of graphene.One might expect that, two decades after its discovery, graphene would have exhausted its potential for surprises. But the thinnest, s…"</p>
          </div>

          <div class="in">
          <h2>Aps.org</h2>
          <img class="news_image" src="https://physics.aps.org/assets/435cdad6-0bcc-446b-a7d5-1b375637d317/e59_1_thumb.png">
          <br>
          <a class="news_desc" href="https://physics.aps.org/articles/v16/s59">Synopsis: Sensing Electric Fields in Ion Sources</a>
          <p>"Focused ion beams (FIBs) are powerful tools for imaging and preparing materials, semiconductor circuits, and biological samples. An important class of FIB sources produces the ions from cold, trapped…"</p>
          </div>

          <div class="in">
          <h2>Digitimes</h2>
          <img class="news_image" src="null">
          <br>
          <a class="news_desc" href="https://www.digitimes.com/news/a20230418PR201/itri.html">The 2023 VLSI TSA symposium explores trends in AI, energy saving, quantum computing, and chiplets</a>
          <p>"The 40th edition of the International VLSI Symposium on Technology, Systems and Applications (VLSI TSA) kicked off on April 17 in Hsinchu, Taiwan. The symposium focuses on the convergence of semicond…"</p>
          </div>

          <div class="in">
          <h2>Nature.com</h2>
          <img class="news_image" src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-30689-7/MediaObjects/41598_2023_30689_Fig1_HTML.png">
          <br>
          <a class="news_desc" href="https://www.nature.com/articles/s41598-023-30689-7">Nanodiamonds enable femtosecond-processed ultrathin glass as a hybrid quantum sensor</a>
          <p>"<li>Nakamura, Y. Of project: Hybrid quantum systems using collective modes in solids with broken symmetry. Nature398, 786788 (1999).Article  CAS Google Scholar </li><li>Li, P.-B., Xiang, Z.-L…"</p>
          </div>

          <div class="in">
          <h2>Department of Defense</h2>
          <img class="news_image" src="https://media.defense.gov/2022/Jun/15/2003018059/1280/1280/0/200204-D-D0439-101.JPG">
          <br>
          <a class="news_desc" href="https://www.defense.gov/News/News-Stories/Article/Article/3367040/microelectronics-tops-st-protype-funding-for-fiscal-2024-pb-request/">Microelectronics Tops S&T, Protype Funding For Fiscal 2024 PB Request</a>
          <p>"Microelectronics, integrated sensing and cyber, as well as integrated network systems-of-systems are prioritized in the DOD's fiscal year 2024 budget request for science and technology and prototypin…"</p>
          </div>

          <div class="in">
          <h2>Department of Defense</h2>
          <img class="news_image" src="https://media.defense.gov/2022/Jun/15/2003018059/1280/1280/0/200204-D-D0439-101.JPG">
          <br>
          <a class="news_desc" href="https://www.defense.gov/News/News-Stories/Article/Article/3367040/presidential-budget-request-prioritizes-science-technology-and-prototype-funding/">Presidential Budget Request Prioritizes Science, Technology and Prototype Funding</a>
          <p>"Microelectronics, integrated sensing and cyber, as well as integrated network systems-of-systems are prioritized in the DOD's fiscal year 2024 budget request for science and technology and prototypin…"</p>
          </div>

          <div class="in">
          <h2>Aps.org</h2>
          <img class="news_image" src="https://cdn.journals.aps.org/journals/PRX/key_images/10.1103/PhysRevX.13.021009.png">
          <br>
          <a class="news_desc" href="https://link.aps.org/doi/10.1103/PhysRevX.13.021009">Uncovering Conformal Symmetry in the 3D Ising Transition: State-Operator Correspondence from a Quantum Fuzzy Sphere Regularization</a>
          <p>"Phase transitions and related critical phenomena originate from collective behavior of interacting particles, the study of which is generally challenging in statistical and condensed matter physics. …"</p>
          </div>

          <div class="in">
          <h2>Science Daily</h2>
          <img class="news_image" src="https://www.sciencedaily.com/images/scidaily-icon.png">
          <br>
          <a class="news_desc" href="https://www.sciencedaily.com/releases/2023/04/230418101439.htm">Quantum liquid becomes solid when heated</a>
          <p>"Supersolids are a relatively new and exciting area of research. They exhibit both solid and superfluid properties simultaneously. In 2019, three research groups were able to demonstrate this state fo…"</p>
          </div>

          <div class="in">
          <h2>Science Daily</h2>
          <img class="news_image" src="https://www.sciencedaily.com/images/scidaily-icon.png">
          <br>
          <a class="news_desc" href="https://www.sciencedaily.com/releases/2023/04/230418101434.htm">Teasing strange matter from the ordinary</a>
          <p>"In a unique analysis of experimental data, nuclear physicists have made the first-ever observations of how lambda particles, so-called \"strange matter,\" are produced by a specific process called semi…"</p>
          </div>

          </div>
`;

let politicalHtml =
`
<h1 style="text-decoration: underline; font-weight: bolder;">Top 3 Articles:</h1>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner"  style=" width:100%; height: 500px !important;" role="listbox">
              <div class="carousel-item active">
                <div id="article_one">
                <div>
            <h1 class="news_header">The Guardian</h1>
            <img class="news_image" src="https://i.guim.co.uk/img/media/6b4cfc70e38da045d0badd591fdf7985660e822a/0_0_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=48c93be1d5ba1181b223375fdfb100fd">
            <br>
            <a class="news_desc" href="https://www.theguardian.com/commentisfree/2023/apr/18/if-dominion-prevails-against-fox-news-that-wont-harm-press-freedoms">If Dominion prevails against Fox News, that won’t harm press freedoms | Jan-Werner Mueller</a>
            <p class="news_p_first">"On Tuesday begins one of the most closely watched trials about press freedom in decades. Dominion, maker of voting machines, is suing Fox News for defaming the company during its coverage of the 2020…"</p>
            </div>


                </div>
              </div>
              <div class="carousel-item">
                <div id="article_two">
                <div>
            <h1 class="news_header">The Guardian</h1>
            <img class="news_image" src="https://i.guim.co.uk/img/media/a8624c8878abbc8865a546f482109a6c57d15cf0/0_41_3200_1920/master/3200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=26102f0c422d00c5210950cfd58af20e">
            <br>
            <a class="news_desc" href="https://www.theguardian.com/commentisfree/2023/apr/18/the-guardian-view-on-sudans-conflict-general-v-general-v-the-people">The Guardian view on Sudan’s conflict: general v general v the people | Editorial</a>
            <p class="news_p_first">"First they turned upon Omar al-Bashir, the strongman they had served, when the Sudanese people rose up against the president. Then, in a coup, they turned upon the civilian politicians who had risen …"</p>
            </div>


                    </div>
              </div>
              <div class="carousel-item">
                <div id="article_three">
                <div>
            <h1 class="news_header">The Guardian</h1>
            <img class="news_image" src="https://i.guim.co.uk/img/media/92ee117aae5f5feac4a74cf05fb6d48df441880d/71_197_3993_2396/master/3993.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cda21720a0ecf7af6b91a17cf8d2c37f">
            <br>
            <a class="news_desc" href="https://www.theguardian.com/politics/2023/apr/18/michael-lipton-obituary">Michael Lipton obituary</a>
            <p class="news_p_first">"The development economist Michael Lipton, who has died aged 86, credited an important part of his education to the people of the village of Kavathe in Maharashtra state, India. His research there in …"</p>
            </div>


                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <h1 style="text-decoration: underline; font-weight: bolder;">Popular News:</h1>
          <div id="popNews">
          <div class="in">
          <h2>The Guardian</h2>
          <img class="news_image" src="https://i.guim.co.uk/img/media/57a1b5a9b727bb4da1557d5fdb8f6997e092d71e/0_358_2767_1661/master/2767.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=4de81d44aff154e376bb546cb8df06ee">
          <br>
          <a class="news_desc" href="https://www.theguardian.com/commentisfree/2023/apr/18/ukraine-russia-border-war-citizens-identities">For years, we believed we could live as both Ukrainians and Russians. Not any more | Artem Mazhulin</a>
          <p>"Where do you call home? Ive travelled and lived in so many places that the question sometimes confused me. Being eastern Ukrainian doesnt make it easy to look for your roots, either.Two world wars,…"</p>
          </div>

          <div class="in">
          <h2>The Guardian</h2>
          <img class="news_image" src="https://i.guim.co.uk/img/media/81362d0c085d98e5efc0b9aa63623c3a8d0982a5/0_333_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=01c64a3d13117ec0b067c98415dc54b6">
          <br>
          <a class="news_desc" href="https://www.theguardian.com/technology/2023/apr/18/mastodon-users-twitter-elon-musk-social-media">Thousands fled to Mastodon after Musk bought Twitter. Are they still ‘tooting’?</a>
          <p>"When Elon Musk bought Twitter nearly six months ago, bringing back white supremacists and booting journalists who had criticized him, many users felt it was the right time to leave the platform.Tho…"</p>
          </div>

          <div class="in">
          <h2>The Guardian</h2>
          <img class="news_image" src="https://i.guim.co.uk/img/media/595d29c484c1a158be3739a1449a11b282dbb7f6/0_347_5200_3120/master/5200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e32b90955e7a5d43a287c07a2cbe9b5a">
          <br>
          <a class="news_desc" href="https://www.theguardian.com/world/2023/apr/18/rafael-moreno-colombia-journalist-murder">A reporter was murdered after alleging corruption – now a global team is finishing his work</a>
          <p>"If youre going to kill me, then kill me. But Ill tell you up front: you wont silence me. In a 37-minute Facebook Live broadcast on 21 July 2022, the independent Colombian journalist Rafael Moreno def…"</p>
          </div>

          <div class="in">
          <h2>NPR</h2>
          <img class="news_image" src="https://media.npr.org/assets/img/2023/04/18/gettyimages-1483089671_wide-8ba788e97cc5f65eec84987e0372a0ce946127b1-s1400-c100.jpg">
          <br>
          <a class="news_desc" href="https://www.npr.org/2023/04/18/1170339114/fox-news-settles-blockbuster-defamation-lawsuit-with-dominion-voting-systems">Fox News settles blockbuster defamation lawsuit with Dominion Voting Systems</a>
          <p>"Members of the legal team representing Dominion Voting Systems leave the Leonard Williams Justice Center where Dominion is suing FOX News in Delaware Superior Court during a lunch break on April 18, …"</p>
          </div>

          <div class="in">
          <h2>Business Insider</h2>
          <img class="news_image" src="https://i.insider.com/643ea63c2ddd0600182606cc?width=1200&format=jpeg">
          <br>
          <a class="news_desc" href="https://www.businessinsider.com/china-succeeding-in-middle-east-because-learned-from-us-failures-2023-4">China is succeeding in the Middle East because it learned from watching the US fail there for 20 years</a>
          <p>"Iranian, Saudi, and Chinese foreign ministers during a meeting in Beijing on April 6.Iran's Foreign Ministry/WANA (West Asia News Agency)/Handout via Reuters<ul><li>China has brokered a deal betwe…"</p>
          </div>

          <div class="in">
          <h2>Business Insider</h2>
          <img class="news_image" src="https://i.insider.com/643efd0ce106f6001973379b?width=1200&format=jpeg">
          <br>
          <a class="news_desc" href="https://www.businessinsider.com/desantis-gets-chilly-reception-in-dc-from-frustrated-florida-democrats-2023-4">Congressional Democrats bash Ron DeSantis for alienating Florida job creator Disney World in service of a 'flailing presidential campaign'</a>
          <p>"Florida Gov. Ron DeSantis speaks to reporters during a press conference at the Reedy Creek Administration Building on April 17 in Lake Buena Vista, Florida.Paul Hennessy/SOPA Images/LightRocket via G…"</p>
          </div>

          <div class="in">
          <h2>Google News</h2>
          <img class="news_image" src="null">
          <br>
          <a class="news_desc" href="https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CCAiC05ORkkyX29kWnhJmAEB?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1">Trudeau grilled by Poilievre over $162000 Jamaica family trip - Global News</a>
          <p>"We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde…"</p>
          </div>

          <div class="in">
          <h2>Slate Magazine</h2>
          <img class="news_image" src="https://compote.slate.com/images/fd09b4b6-f7fd-4b71-855b-0fb14d554539.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560">
          <br>
          <a class="news_desc" href="https://slate.com/news-and-politics/2023/04/dianne-feinstein-senate-judiciary-republicans.html">The Dianne Feinstein Saga Has a Strange New Twist</a>
          <p>"We are now in week two of the Dianne Feinstein saga, in which Democrats willingness to jeopardize their own agenda to accommodate the ailing, absentee senator will be on full display.Sen. Chuck Sch…"</p>
          </div>

          <div class="in">
          <h2>IGN</h2>
          <img class="news_image" src="https://assets-prd.ignimgs.com/2023/03/07/01-1678228897730.jpg?width=1280">
          <br>
          <a class="news_desc" href="https://www.ign.com/articles/change-your-fate-with-watcher-of-realms-a-next-gen-fantasy-rpg-for-mobile-pc">Change Your Fate With Watcher of Realms, a Next-Gen Fantasy RPG for Mobile & PC</a>
          <p>"What is Watcher of Realms?Watcher of Realms is a next-gen fantasy RPG that reminds us that while we're ever the playthings of the gods, we're not obligated to sit still while they break us like c…"</p>
          </div>

          <div class="in">
          <h2>The Atlantic</h2>
          <img class="news_image" src="null">
          <br>
          <a class="news_desc" href="https://www.theatlantic.com/magazine/archive/2023/05/the-commons/673484/?utm_source=feed">‘Joe Biden’s Show Lacks Entertainment Value’</a>
          <p>"We’re Already Living in the MetaverseReality is blurred, boredom is intolerable, and everything is entertainment, Megan Garber wrote in the March 2023 issue.Amid all the speculation about the sources…"</p>
          </div>

          <div class="in">
          <h2>The Atlantic</h2>
          <img class="news_image" src="null">
          <br>
          <a class="news_desc" href="https://www.theatlantic.com/books/archive/2023/04/microbes-pathogens-plagues-human-civilization-history/673753/?utm_source=feed">A History of Humanity in Which Humans Are Secondary</a>
          <p>"Most accounts of humanity’s origins, and our evolution since, have understandably put Homo sapiens center stage. It was our ingenuity, our tools, our cultural savvy that enabled our species to surviv…"</p>
          </div>

          <div class="in">
          <h2>BBC News</h2>
          <img class="news_image" src="https://ichef.bbci.co.uk/news/1024/branded_news/C9F3/production/_129399615_danish_getty976.jpg">
          <br>
          <a class="news_desc" href="https://www.bbc.co.uk/news/world-us-canada-64878254">What Americans can learn from Denmark on handling debt ceiling crisis</a>
          <p>"The high-wire drama of raising the US debt ceiling is making headlines again. Is there a better way? Perhaps Denmark has the answer. The US Congress is once more arguing about the country's debt ce…"</p>
          </div>

          <div class="in">
          <h2>Thehub.ca</h2>
          <img class="news_image" src="https://thehub.ca/wp-content/uploads/2023/04/CP25992655_web.jpg">
          <br>
          <a class="news_desc" href="https://thehub.ca/2023-04-11/make-the-future-bright-again-jason-crawford-on-the-importance-of-building-a-new-philosophy-of-progress/">Make the future bright again: On building a new philosophy of progress</a>
          <p>"This episode of Hub Dialogues features host Sean Speer in conversation with Jason Crawford, founder of the U.S.-based non-profit organization Roots of Progress, about human progress, why it has slowe…"</p>
          </div>

          <div class="in">
          <h2>Cambridge.org</h2>
          <img class="news_image" src="https://static.cambridge.org/covers/CEH_0_0_0/contemporary_european history.jpg?send-full-size-image=true">
          <br>
          <a class="news_desc" href="https://www.cambridge.org/core/journals/contemporary-european-history/article/ministates-and-microsovereignty-local-democracies-in-east-central-europe-19181923/68ECB1DC9F610696C966B63C9CE2B736">Mini-States and Micro-Sovereignty: Democracies in East Central Europe, 1918–1923</a>
          <p>"In December 1918, Lutheran pastor Emil Hegemann left his native Schwenten in east Prussia and headed for Glogau (present-day Gogów). Hegemann and his 800 or so parishioners felt under attack from the…"</p>
          </div>

          <div class="in">
          <h2>Theregister.com</h2>
          <img class="news_image" src="https://regmedia.co.uk/2018/12/13/shutterstock_crystal_ball.jpg">
          <br>
          <a class="news_desc" href="https://www.theregister.com/2023/04/18/large_language_models_like_chatgpt/">Predict stocks, foresee public opinion, all kinda possible with ChatGPT-like models</a>
          <p>"If you want a picture of the future, imagine asking a large language model for a prediction.Two sets of researchers did so recently and found that large language models (LLMs) like ChatGPT and BERT…"</p>
          </div>

          <div class="in">
          <h2>The A.V. Club</h2>
          <img class="news_image" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/85fa7a3c514be7391c690a4aca60e527.jpg">
          <br>
          <a class="news_desc" href="https://www.avclub.com/keri-russell-interview-the-americans-the-diplomat-1850334209">Keri Russell on The Diplomat: "I have to really like something to pursue it"</a>
          <p>"Five years after The Americans ended, Keri Russell is finally back on TV with a worthy leading role in Netflixs politically charged The Diplomat. The actor has always been a tour de force, from her h…"</p>
          </div>

          <div class="in">
          <h2>Politico</h2>
          <img class="news_image" src="https://static.politico.com/a6/19/a91ef47f448493ecdeed53e22a0a/kansas-city-teen-shot-47200.jpg">
          <br>
          <a class="news_desc" href="https://www.politico.com/news/2023/04/18/ralph-yarl-shooting-stand-your-ground-black-teen-00092608">Why the Ralph Yarl shooting is reigniting the ’stand your ground’ debate</a>
          <p>"It would also mark a stark turn of events for the white man who, immediately after the shooting on Thursday, was taken into custody but promptly released after about an hour. Lester surrendered Tuesd…"</p>
          </div>

          </div>
`;

function filterGeneral(){
    document.getElementById("content_holder").innerHTML = generalHtml;
}

function filterNuclear(){
    document.getElementById("content_holder").innerHTML = nuclearHtml;
}

function filterQuantum(){
    document.getElementById("content_holder").innerHTML = quantumHtml;
}
function filterPolitical(){
    document.getElementById("content_holder").innerHTML = politicalHtml;
}