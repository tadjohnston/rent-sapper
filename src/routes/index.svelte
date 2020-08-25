<script>
  import DetailHeader from '../components/Listing/DetailHeader.svelte'
  import Schools from "../components/Listing/Schools.svelte";
  import Description from "../components/Listing/Description.svelte";
  import OfficeHours from "../components/Listing/OfficeHours.svelte";
  import Amenities from '../components/Listing/Amenities.svelte'
  import PetPolicy from '../components/Listing/PetPolicy.svelte'
  import Parking from '../components/Listing/Parking.svelte'
  import Carousel from '../components/Listing/Carousel.svelte'

  import Cities from "../components/Nearby/Cities.svelte";
  import Hoods from "../components/Nearby/Hood.svelte";
</script>

<svelte:head>
  <title>Property Details</title>
</svelte:head>
<DetailHeader />
<Carousel />
<div class="md:max-w-content mx-auto sm:px-30 xl:px-0">
  <div class="border-t border-gray-300 my-60 max-w-1/2 mx-auto" />
  <h2 class="leading-header300 pb-12">Pet Policy</h2>
  <div class="pb-40">Find out if pets are allowed at this property</div>
  <PetPolicy />
  <div class="border-t border-gray-300 my-60 max-w-1/2 mx-auto" />
  <h2 class="leading-header300 pb-12">Amenities</h2>
  <div class="pb-10">See all 27 amenities for this unit</div>
  <Amenities />
  <div class="border-t border-gray-300 my-60 max-w-1/2 mx-auto" />
  <h2 class="leading-header300 pb-12">Parking</h2>
  <div class="pb-40">See parking details for this unit</div>
  <Parking />
  <div class="border-t border-gray-300 my-60 max-w-1/2 mx-auto" />
  <h2 class="leading-header300 pb-12">Description</h2>
  <div class="pb-40">Learn more about this property</div>
  <Description />
  <div class="border-t border-gray-300 my-60 max-w-1/2 mx-auto" />
  <h2 class="leading-header300 pb-12">Schools</h2>
  <div class="pb-40">All ratings provided by GreatSchools ®</div>
  <Schools />
  <div class="border-t border-gray-300 my-60 max-w-1/2 mx-auto" />
  <h2 class="leading-header300 pb-12">Office Hours</h2>
  <div
    data-tid="section-banner-showable"
    class="rounded px-16 py-11 border border-l-brand-primary bg-gray-100 border-l-4">
    In response to COVID-19, we have moved to a VIRTUAL leasing office until
    further notice.
  </div>
  <div class="mb-40 mt-20">
    <span data-tid="pdpOfficeHours_Description">Open Until 06:00 PM</span>
  </div>
  <OfficeHours />
  <div data-tid="pdpNearbyCities" class="rounded border border-t-brand-primary border-t-8 p-20 flex flex-col mt-40">
    <h2 class="text-header200 t pb-30 mx-auto" data-tag_item="header">
      Find Apartments in Nearby Cities
    </h2>
    <Cities />
  </div>
  <div data-tid="pdpNearbyNeighborhoods" class="rounded border border-t-brand-primary border-t-8 p-20 flex flex-col mt-40">
    <h2 class="text-header200 t pb-30 mx-auto" data-tag_item="header">
      Find Apartments in Nearby Neighborhoods
    </h2>
    <Hoods />
  </div>
</div>
