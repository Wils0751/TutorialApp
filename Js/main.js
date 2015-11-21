$(document).on('mobileinit', init);

function init()
{
  $(document).on('pageshow', '#homepage', handleHome);
  $(document).on('pageshow', '.step' , handleStep);
}

function handleHome()
{
  {
    var savedPage = window.localStorage.getItem('tutorialPage');
    {
      $('a[id="startLink"]').attr('href', savedPage);
    }
  }
}

function handleStep()
{
  {
    var crntPage = '#' + $(this).attr('id');
    window.localStorage.setItem('tutorialPage', crntPage);
  }

  $('a[data-rel="back"]').attr
  ({
    'href': '#homepage',
    'data-rel': ''
  });
}
