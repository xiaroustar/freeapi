 !function($) {
  "use strict";

      /* Colored Switches */
      var primary = document.querySelector('.js-switch-primary');
      var switchery = new Switchery(primary, { color: '#4c7cf3' });

      var secondary = document.querySelector('.js-switch-secondary');
      var switchery = new Switchery(secondary, { color: '#949CA9' });

      var success = document.querySelector('.js-switch-success');
      var switchery = new Switchery(success, { color: '#2bcd72' });

      var danger = document.querySelector('.js-switch-danger');
      var switchery = new Switchery(danger, { color: '#ff4b5b' });

      var warning = document.querySelector('.js-switch-warning');
      var switchery = new Switchery(warning, { color: '#fac751' });
      
      var info = document.querySelector('.js-switch-info');
      var switchery = new Switchery(info, { color: '#52c4ca' });

      var light = document.querySelector('.js-switch-light');
      var switchery = new Switchery(light, { color: '#e5e5e6' });

      var dark = document.querySelector('.js-switch-dark');
      var switchery = new Switchery(dark, { color: '#313131' });

      /* Small Switches */
      var primary_small = document.querySelector('.js-switch-primary-small');
      var switchery = new Switchery(primary_small, { color: '#4c7cf3', size: 'small' });

      var secondary_small = document.querySelector('.js-switch-secondary-small');
      var switchery = new Switchery(secondary_small, { color: '#949CA9', size: 'small' });

      var success_small = document.querySelector('.js-switch-success-small');
      var switchery = new Switchery(success_small, { color: '#2bcd72', size: 'small' });

      var danger_small = document.querySelector('.js-switch-danger-small');
      var switchery = new Switchery(danger_small, { color: '#ff4b5b', size: 'small' });

      var warning_small = document.querySelector('.js-switch-warning-small');
      var switchery = new Switchery(warning_small, { color: '#fac751', size: 'small' });
      
      var info_small = document.querySelector('.js-switch-info-small');
      var switchery = new Switchery(info_small, { color: '#52c4ca', size: 'small' });

      var light_small = document.querySelector('.js-switch-light-small');
      var switchery = new Switchery(light_small, { color: '#e5e5e6', size: 'small' });

      var dark_small = document.querySelector('.js-switch-dark-small');
      var switchery = new Switchery(dark_small, { color: '#313131', size: 'small' });

      /* Large Switches */
      var primary_large = document.querySelector('.js-switch-primary-large');
      var switchery = new Switchery(primary_large, { color: '#4c7cf3', size: 'large' });

      var secondary_large = document.querySelector('.js-switch-secondary-large');
      var switchery = new Switchery(secondary_large, { color: '#949CA9', size: 'large' });

      var success_large = document.querySelector('.js-switch-success-large');
      var switchery = new Switchery(success_large, { color: '#2bcd72', size: 'large' });

      var danger_large = document.querySelector('.js-switch-danger-large');
      var switchery = new Switchery(danger_large, { color: '#ff4b5b', size: 'large' });

      var warning_large = document.querySelector('.js-switch-warning-large');
      var switchery = new Switchery(warning_large, { color: '#fac751', size: 'large' });
      
      var info_large = document.querySelector('.js-switch-info-large');
      var switchery = new Switchery(info_large, { color: '#52c4ca', size: 'large' });

      var light_large = document.querySelector('.js-switch-light-large');
      var switchery = new Switchery(light_large, { color: '#e5e5e6', size: 'large' });

      var dark_large = document.querySelector('.js-switch-dark-large');
      var switchery = new Switchery(dark_large, { color: '#313131', size: 'large' });

      /* Multicolor Switches */
      var primary_multicolor = document.querySelector('.js-switch-primary-multicolor');
      var switchery = new Switchery(primary_multicolor, { color: '#4c7cf3', jackColor: '#dbe5fd' });

      var secondary_multicolor = document.querySelector('.js-switch-secondary-multicolor');
      var switchery = new Switchery(secondary_multicolor, { color: '#949ca9', jackColor: '#e9eaed' });

      var success_multicolor = document.querySelector('.js-switch-success-multicolor');
      var switchery = new Switchery(success_multicolor, { color: '#2bcd72', jackColor: '#a5ecc4' });

      var danger_multicolor = document.querySelector('.js-switch-danger-multicolor');
      var switchery = new Switchery(danger_multicolor, { color: '#ff4b5b', jackColor: '#ffe4e6' });

      var warning_multicolor = document.querySelector('.js-switch-warning-multicolor');
      var switchery = new Switchery(warning_multicolor, { color: '#fac751', jackColor: '#fef7e6' });
      
      var info_multicolor = document.querySelector('.js-switch-info-multicolor');
      var switchery = new Switchery(info_multicolor, { color: '#52c4ca', jackColor: '#c7ecee' });

      var light_multicolor = document.querySelector('.js-switch-light-multicolor');
      var switchery = new Switchery(light_multicolor, { color: '#e5e5e6', jackColor: '#e2e6ea' });

      var dark_multicolor = document.querySelector('.js-switch-dark-multicolor');
      var switchery = new Switchery(dark_multicolor, { color: '#313131', jackColor: '#7e7e7e' });


      /* On - Off Multicolor Switches */
      var primary_multicolor_on_off = document.querySelector('.js-switch-primary-multicolor-on-off');
      var switchery = new Switchery(primary_multicolor_on_off, { color: '#4c7cf3', secondaryColor: '#949ca9', jackColor: '#dbe5fd', jackSecondaryColor: '#e9eaed' });

      var secondary_multicolor_on_off = document.querySelector('.js-switch-secondary-multicolor-on-off');
      var switchery = new Switchery(secondary_multicolor_on_off, { color: '#949ca9', secondaryColor: '#4c7cf3', jackColor: '#e9eaed', jackSecondaryColor: '#dbe5fd' });

      var success_multicolor_on_off = document.querySelector('.js-switch-success-multicolor-on-off');
      var switchery = new Switchery(success_multicolor_on_off, { color: '#2bcd72', secondaryColor: '#ff4b5b', jackColor: '#a5ecc4', jackSecondaryColor: '#ffe4e6' });

      var danger_multicolor_on_off = document.querySelector('.js-switch-danger-multicolor-on-off');
      var switchery = new Switchery(danger_multicolor_on_off, { color: '#ff4b5b', secondaryColor: '#2bcd72', jackColor: '#ffe4e6', jackSecondaryColor: '#a5ecc4' });

      var warning_multicolor_on_off = document.querySelector('.js-switch-warning-multicolor-on-off');
      var switchery = new Switchery(warning_multicolor_on_off, { color: '#fac751', secondaryColor: '#52c4ca', jackColor: '#fef7e6', jackSecondaryColor: '#c7ecee' });
      
      var info_multicolor_on_off = document.querySelector('.js-switch-info-multicolor-on-off');
      var switchery = new Switchery(info_multicolor_on_off, { color: '#52c4ca', secondaryColor: '#fac751', jackColor: '#c7ecee', jackSecondaryColor: '#fef7e6' });

      var light_multicolor_on_off = document.querySelector('.js-switch-light-multicolor-on-off');
      var switchery = new Switchery(light_multicolor_on_off, { color: '#e5e5e6', secondaryColor: '#313131', jackColor: '#e2e6ea', jackSecondaryColor: '#7e7e7e' });

      var dark_multicolor_on_off = document.querySelector('.js-switch-dark-multicolor-on-off');
      var switchery = new Switchery(dark_multicolor_on_off, { color: '#313131', secondaryColor: '#e5e5e6', jackColor: '#7e7e7e', jackSecondaryColor: '#e2e6ea' });


      

}(window.jQuery);