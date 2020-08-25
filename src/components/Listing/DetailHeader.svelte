<script>
  import BreadCrumbs from '../BreadCrumbs.svelte'
  import FontIcon from '../FontIcon.svelte'
</script>

<style>
  .stars, .stars-empty {
    background-size: 14px;
  }

  .dot:before {
    content: "•";
    padding: 0 7px;
  }

  .floorplans li:not(:first-child):not(:last-child):before {
    content: " ";
    width: 1px;
    height: 14px;
    display: inline-block;
    background-color: #fff;
    top: 2px;
    position: relative;
    margin-right: 10px;
  }
</style>

<div class="text-white bg-brand-primary p-40 pt-0 -mt-10 mx-auto">
  <BreadCrumbs />
  <div class="pt-20 max-w-content mx-auto" data-tid="pdpKeyInfo" data-tag_section="property_overview">
    <div class="_3Nyef">
      <div class="flex flex-row justify-between">
        <div>
          <div class="text-yellow text-header-200 flex" data-tid="pdpKeyInfo_price">
            $1,322+
            <div
              class="ml-15 flex justify-center items-center"
              data-tid="pdpKeyInfo_rating"
              data-tag_item="cr3"
            >
              <div class="stars-empty w-70 h-14 leading-legal000">
                <div class="stars max-w-70 h-14"  style="width:80%" />
              </div>
              <div class="text-gray-200 text-legal100 font-regular leading-legal000 mt-3 ml-5">
                4
              </div>
            </div>
          </div>
          <h1 class="text-white text-header-300" data-tid="property-title">Cortland Decatur East</h1>
          <div class="pb-10" data-tid="pdpKeyInfo_address">
            <div class="inline" data-tid="pdpKeyInfo_citystatezip">
              <span>2641 E College Avenue,</span>
              <span>Decatur</span>
              ,
              <span>Georgia</span>
              &nbsp;
              <span>30030</span>
            </div>
            <div class="dot inline" data-tid="pdpKeyInfo_neighborhood">Decator</div>
          </div>
          <div class="_2EqKH">
            <ul class="floorplans">
              <li class="inline-block pr-10" data-tid="pdpKeyInfo_bedText">Studio–3 Beds</li>
              <li class="inline-block pr-10" data-tid="pdpKeyInfo_bathText">1–2 Baths</li>
              <li class="inline-block" data-tid="pdpKeyInfo_sqFt">581-1444 Sqft</li>
              <li data-tid="availability" class="inline-block">
                <div
                  class="text-yellow dot"
                  role="button"
                  tabindex="0"
                  data-tid="pdpKeyInfo_unitsAvailable"
                  data-tag_item="units_available">
                  29 Floor Plans and 114 Units Available
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <a
              data-tid="pdpKeyInfo_phone"
              href="tel:4704198904"
              class="btn bg-white text-cta-regular mb-18 py-12 px-16"
              data-tag_action="lead_submission"
              data-tag_item="phone_number_link"
              data-tag_selection="phone"
              data-tag_listing_id="100067741"
              data-tag_tpl_source="MYADS"
              data-tag_revenue="20"
            >
              <FontIcon name="phone" class="pr-10 text-header100" />
              <span>(470) 419-8904</span>
            </a>
            <button
              class="text-cta-regular btn bg-white text-brand-primary py-12 px-16"
              data-tid="pdpKeyInfo_contact_email"
              data-tag_item="check_availability_button">
              <FontIcon name="email" class="pr-10 text-header100" />
              Send an Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
