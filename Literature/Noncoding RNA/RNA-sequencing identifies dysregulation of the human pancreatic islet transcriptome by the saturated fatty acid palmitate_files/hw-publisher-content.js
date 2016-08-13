$(document).ready(function() {


var retractionLink = $('li.relmgr-relation.errata a').attr('href');
var retractionTest = $('li.relmgr-relation.errata .cit-section').text().toLowerCase();
var ArticleDiv = $("div#content-block");

if ((retractionLink != undefined) ||  (retractionLink != ''))
{
        retractionLink = $('li.notice.correction-links a').attr('href');
        retractionTest = $('li.notice.correction-links a').text().toLowerCase().replace(/[\s\S]*retraction[\s\S]*/, 'retraction');

}
if ((retractionLink != undefined) && (retractionLink != '') && (retractionTest == "retraction"))
{
        ArticleDiv.prepend('<div class="retraction-alert"><a href="' + retractionLink + '">This article has been retracted.</div></a>');
}

var HasRetraction = $('.related-article.retraction-for-article').text();

if (HasRetraction.length > 0) {
var RemoveOld = $('#before_resource_rev_errata').empty();
}
});
