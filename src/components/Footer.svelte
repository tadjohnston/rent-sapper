<script>
  import DynamicSvg from './DynamicSvg.svelte'
  import FontIcon from './FontIcon.svelte'
 </script>

<footer
  data-tag_section="footer"
  class="my-40 mx-auto text-center text-gray-500 max-w-content"
>
  <div class="pt-45 pb-40 flex justify-center sm:border-t sm:border-gray-300 sm:mx-20">
    <a
      href="/"
      title="Rent.com"
      aria-label="Rent.com"
      data-tid="rent-logo-footer"
      data-tag_item="rent_logo"
    >
      <DynamicSvg name="logo" className="text-brand-primary fill-current h-25" />
    </a>
  </div>
  <div class="sm:flex sm:justify-center">
    <div data-tid="our-company" class="flex flex-col sm:flex-1">
      <h4
        class="border-t border-gray-200 text-header-color sm:justify-center sm:border-none sm:py-10">
        <button
          class="btn flex justify-between w-full uppercase font-bold px-16 py-12 sm:block sm:p-0"
          data-tid="button"
          type="button"
        >
          Our Company
          <FontIcon name="chevron-down" class="text-gray-400 text-body sm:hidden" />
        </button>
      </h4>
      <ul
        class="text-left leading-body ml-16 sm:ml-0 sm:block sm:text-center hidden">
        <li class="py-10">
          <a href="https://www.rentpath.com/about-us/" data-tag_item="about_us">
            About Us
          </a>
        </li>
        <li class="py-10">
          <a
            href="https://www.rentpath.com/contact-us/"
            data-tag_item="media_contact">
            Press &amp; Media
          </a>
        </li>
        <li class="py-10">
          <a href="https://careers.rentpath.com" data-tag_item="careers">
            Careers
          </a>
        </li>
        <li class="py-10">
          <a
            href="https://www.rentpath.com/privacy-policy/"
            data-tag_item="privacy_policy">
            Privacy Policy
          </a>
        </li>
        <li class="py-10">
          <a
            href="https://www.rentpath.com/terms-of-use/"
            data-tag_item="terms_of_service">
            Terms of Service
          </a>
        </li>
        <li class="py-10">
          <a
            href="https://www.rentpath.com/privacy-policy/#CaliforniaNotice"
            data-tag_item="california_privacy">
            Do Not Sell My Info
          </a>
        </li>
      </ul>
    </div>
    <div data-tid="popular-searches" class="flex flex-col sm:flex-1">
      <h4
        class="border-t border-gray-200 text-header-color sm:justify-center sm:border-none sm:py-10">
        <button
          class="btn flex justify-between w-full uppercase font-bold px-16 py-12 sm:block sm:p-0"
          data-tid="button"
          type="button"
        >
          Popular Searches
          <FontIcon name="chevron-down" class="text-gray-400 text-body sm:hidden" />
        </button>
      </h4>
      <ul
        class="text-left leading-body ml-16 sm:ml-0 sm:block sm:text-center hidden">
        <li class="py-10">
          <a href="/houses-for-rent" data-tag_item="houses_for_rent">
            Houses for Rent
          </a>
        </li>
        <li class="py-10">
          <a
            href="/cheap-apartments-for-rent"
            data-tag_item="cheap_apartments_for_rent">
            Cheap Apartments for Rent
          </a>
        </li>
        <li class="py-10">
          <a
            href="/pet-friendly-apartments"
            data-tag_item="pet_friendly_apartments">
            Pet Friendly Apartments
          </a>
        </li>
        <li class="py-10">
          <a href="/studio-apartment" data-tag_item="studio_apartments">
            Studio Apartments
          </a>
        </li>
        <li class="py-10">
          <a href="/1-bedroom-apartment" data-tag_item="one_bedroom_apartments">
            1 Bedroom Apartments
          </a>
        </li>
        <li class="py-10">
          <a href="/2-bedroom-apartment" data-tag_item="two_bedroom_apartments">
            2 Bedroom Apartments
          </a>
        </li>
        <li class="py-10">
          <a
            href="/3-bedroom-apartment"
            data-tag_item="three_bedroom_apartments">
            3 Bedroom Apartments
          </a>
        </li>
      </ul>
    </div>
    <div data-tid="let-us-help" class="flex flex-col sm:flex-1">
      <h4
        class="border-t border-gray-200 text-header-color sm:justify-center sm:border-none sm:py-10">
        <button
          class="btn flex justify-between w-full uppercase font-bold px-16 py-12 sm:block sm:p-0"
          data-tid="button"
          type="button"
        >
          Let Us Help
          <FontIcon name="chevron-down" class="text-gray-400 text-body sm:hidden" />
        </button>
      </h4>
      <ul
        class="text-left leading-body ml-16 sm:ml-0 sm:block sm:text-center hidden">
        <li class="py-10">
          <a href="/company/security/" data-tag_item="rental_safety">
            Avoid Scams
          </a>
        </li>
        <li class="py-10">
          <a href="/list" data-tag_item="list_a_property">List a Property</a>
        </li>
        <li class="py-10">
          <a href="/sitemap" data-tag_item="sitemap">Site Map</a>
        </li>
        <li class="py-10">
          <a
            href="https://www.rentpath.com/accessibility"
            data-tag_item="accessibility">
            Accessibility
          </a>
        </li>
        <li class="py-10">
          <a
            href="https://www.rent.com/blog/coronavirus"
            data-tag_item="covid_19">
            COVID-19
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="py-40 border-t border-gray-200 sm:border-none">
    <ul class="flex justify-center text-header300">
      <li class="px-12 py-0 sm:px-20">
        <a
          href="https://www.facebook.com/rentdotcom"
          title="Facebook"
          class="text-gray-500"
          data-tag_item="facebook"
          target="_blank"
          rel="external noopener noreferrer"
        >
          <FontIcon name="facebook" />
        </a>
      </li>
      <li class="px-12 py-0 sm:px-20">
        <a
          href="https://twitter.com/rentdotcom"
          title="Twitter"
          class="text-gray-500"
          data-tag_item="twitter"
          target="_blank"
          rel="external noopener noreferrer"
        >
          <FontIcon name="twitter" />
        </a>
      </li>
      <li class="px-12 py-0 sm:px-20">
        <a
          href="https://www.pinterest.com/rentdotcom/"
          title="Pinterest"
          class="text-gray-500"
          data-tag_item="pinterest"
          target="_blank"
          rel="external noopener noreferrer"
        >
          <FontIcon name="pinterest" />
        </a>
      </li>
      <li class="px-12 py-0 sm:px-20">
        <a
          href="https://www.youtube.com/user/rent"
          title="YouTube"
          class="text-gray-500"
          data-tag_item="youtube"
          target="_blank"
          rel="external noopener noreferrer"
        >
          <FontIcon name="youtube" />
        </a>
      </li>
      <li class="px-12 py-0 sm:px-20">
        <a
          href="https://instagram.com/rent_dot_com/"
          title="Instagram"
          class="text-gray-500"
          data-tag_item="instagram"
          target="_blank"
          rel="external noopener noreferrer"
        >
          <FontIcon name="instagram" />
        </a>
      </li>
    </ul>
  </div>
  <div data-tid="footer-app-links" class="mb-12 text-legal100 sm:mb-10">
    Download the Rent.com app for
    <a
      href="https://play.google.com/store/apps/details?id=com.rent&amp;referrer=ts%3D96e725f6-e305-11e4-9781-00163cabc4e4"
      target="_blank"
      rel="external noopener noreferrer"
      data-tag_item="android_download_button">
      Android
    </a>
    and
    <a
      href="https://apps.apple.com/us/app/rent-com-apartments-home-rentals/id388038507?mt=8"
      target="_blank"
      rel="external noopener noreferrer"
      data-tag_item="ios_download_button">
      iOS
    </a>
    .
  </div>
  <div class="text-center flex flex-col mx-auto my-0">
    <div class="text-legal100 mb-40" data-tid="rentpath-copyright-text">
      © 2020 RentPath, LLC. All rights reserved.
      <a
        href="https://www.rentpath.com/terms-of-use/"
        data-tag_item="terms_of_service_bottom">
        Terms of Service
      </a>
      and
      <a
        href="https://www.rentpath.com/privacy-policy/"
        data-tag_item="privacy_policy_bottom">
        Privacy Policy
      </a>
      .
    </div>
    <div class="flex justify-center">
      <a
        href="https://www.rentpath.com/legal/equal-housing-opportunity/"
        data-tag_item="equal_housing"
        title="Equal Housing Opportunity"
      >
        <DynamicSvg name="equalOpportunity" className="text-gray-500 fill-current h-50" />
      </a>
    </div>
  </div>
</footer>
