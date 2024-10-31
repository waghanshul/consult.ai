// Select all elements with class 'card'
document.querySelectorAll('.card').forEach(card => {
    // Add event listener for mouse enter (hover)
    card.addEventListener('mouseenter', () => {
      // Card Scale and Shadow Effect
      card.style.transform = 'cale(1.05)';
      card.style.boxShadow = '7px 7px 20px rgba(50, 50, 50, 0.7)';
      
      // Title Text Color Change
      card.querySelector('.card-title').style.color = '#ffffff'; // Change to white on hover
      
      // Description Opacity and Color Adjustment
      card.querySelector('.card-description').style.opacity = '1'; // Fully opaque on hover
      card.querySelector('.card-description').style.color = '#cccccc'; // Light gray on hover
      
      // Background Color Transition for Enhanced Visual Cue
      card.style.backgroundColor = '#666666'; // Dark gray on hover
    });
    
    // Add event listener for mouse leave (hover end)
    card.addEventListener('mouseleave', () => {
      // Reset Card Scale and Shadow
      card.style.transform = 'cale(1)';
      card.style.boxShadow = '5px 5px 15px rgba(50, 50, 50, 0.5)';
      
      // Reset Title Text Color
      card.querySelector('.card-title').style.color = '#333333'; // Reset to dark gray
      
      // Reset Description Opacity and Color
      card.querySelector('.card-description').style.opacity = '0.7'; // Partially opaque
      card.querySelector('.card-description').style.color = '#666666'; // Dark gray
      
      // Reset Background Color
      card.style.backgroundColor = '#f7f7f7'; // Reset to light gray
    });
  });