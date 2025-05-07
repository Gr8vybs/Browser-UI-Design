
resources = [
    {
        "logo": "./images/logo-devlens.png",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./images/logo-style-spy.png",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./images/logo-speed-boost.png",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./images/logo-json-wizard.png",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./images/logo-tab-master-pro.png",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./images/logo-viewport-buddy.png",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./images/logo-markup-notes.png",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./images/logo-grid-guides.png",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./images/logo-palette-picker.png",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./images/logo-link-checker.png",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./images/logo-dom-snapshot.png",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./images/logo-console-plus.png",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ]
  
  document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  
  const createExtensionElement = (resource) => {
    const template = `
      <div class="ext-container ${resource.isActive ? 'isActive' : ''}">
        <div class="top-sect">
          <img src="${resource.logo}" class="ext-logo">
          <div class="group-top">
            <h2 class="ext-name">${resource.name}</h2>
            <p class="ext-para">${resource.description}</p>
          </div>
        </div>
        <div class="bottom-sect">
          <button class="remove">Remove</button>
          <div class="toggle-wrapper">
            <input type="checkbox" 
              id="${resource.name}" 
              class="toggle-input"
              ${resource.isActive ? 'checked' : ''}>
            <label for="${resource.name}" class="toggle-label"></label>
          </div>
        </div>
      </div>
    `;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = template;
    return wrapper.firstElementChild;
  };

  // Render all extensions
  resources.forEach(resource => {
    container.appendChild(createExtensionElement(resource));
  });

  // Event delegation for toggle switches
  container.addEventListener('change', (e) => {
    if (e.target.classList.contains('toggle-input')) {
      const extContainer = e.target.closest('.ext-container');
      extContainer.classList.toggle('isActive', e.target.checked);
    }
  });

  // Filter functionality
  const handleFilter = (filterType) => {
    const containers = document.querySelectorAll('.ext-container');
    containers.forEach(container => {
      const isActive = container.classList.contains('isActive');
      const shouldShow = 
        filterType === 'all' || 
        (filterType === 'active' && isActive) || 
        (filterType === 'inactive' && !isActive);
        
      container.style.display = shouldShow ? 'block' : 'none';
    });
  };

  // Add filter button listeners
  document.querySelectorAll('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterType = btn.textContent.toLowerCase();
      handleFilter(filterType);
    });
  });
 
  // Targeting the daylight element,to toggle between themes for the browser
  const day = document.querySelector('.daylight');
  // Targeting the body tag, to toggle between themes for the body
  const body = document.querySelector('body');
  
  const dayLight = (id) => {
    const container = document.querySelectorAll('.ext-container');
    const body = document.querySelector('body');
    container.forEach(container => {
      if (container.id === id) {
        container.id = '';
        body.id = '';
      } else {
        container.id = id;
      }
    })
  }
  
  // targetting all button tags
  const buttons = document.querySelectorAll('button');
  // targetting the h1 with its class
  const h1 = document.querySelector('.extension');
  // targetting the title bar 
  
  const titleBar = document.querySelector('.title-bar');
  // trqgetting the daylight container
  const dayLite = document.querySelector('.daylite');
  // targetting the sub-title h2 tag 
  const subTitle = document.querySelector(' .sub-title');
  // targetting all extension divs 
  const allExt = document.querySelectorAll('.ext-container');

  day.addEventListener('click', () => {
    allExt.forEach(ext => {
      ext.classList.toggle('entire');
    })
    body.classList.toggle('dot');
    buttons.forEach(button => {
      button.classList.toggle('entire');
    });
    h1.classList.toggle('title');
    titleBar.classList.toggle('entire');
    dayLite.classList.toggle('entire');
    subTitle.classList.toggle('title');
    toggleImageSrc();
  });
  
  const toggleImageSrc = () => {
    const imageTag = document.querySelector('.daylight');
    const firstImage = 'icon-sun.png';
    const secondImage = 'icon-moon.png';
    
    imageTag.src = imageTag.src.includes(firstImage) ? secondImage : firstImage;
  }
  
  const removeBtn = document.querySelectorAll('.remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const ext = e.target.closest('.ext-container');
      ext.style.display = 'none';
    })
  })
  
});
