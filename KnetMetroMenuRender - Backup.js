function KnetMetroMenu()
{
	this.MenuData;
	this.SelectedItem;
	this.Width;
	this.Height;
	this.Title;
	
     Resize();
     AddMouseWheel();


	// Databinding for property MenuData
	this.SetMenuData = function(data)
	{
		///UserCodeRegionStart:[SetMenuData] (do not remove this comment.)
      
 		this.MenuData = data;		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property MenuData
	this.GetMenuData = function()
	{
		///UserCodeRegionStart:[GetMenuData] (do not remove this comment.)

		return this.MenuData;		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedItem
	this.SetSelectedItem = function(data)
	{
		///UserCodeRegionStart:[SetSelectedItem] (do not remove this comment.)

     this.SelectedItem = data;
		
		
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedItem
	this.GetSelectedItem = function()
	{
		///UserCodeRegionStart:[GetSelectedItem] (do not remove this comment.)
      return this.SelectedItem;	
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		if (!this.IsPostBack)
		{
			var buffer = new gx.text.stringBuffer();
			buffer.clear();
			
			var markup = this.loadSystemData(this.MenuData);
			buffer.append(markup);
			this.setHtml(buffer.toString());
			this.initKnetMetroMenu();
		}
    
			
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
    this.tmpbuffer = new gx.text.stringBuffer();
	this.tmpbuffer.clear();
	
	this.loadSystemData = function(data) {

		var i = 0;	
		var j = 0;

					
     	for (i = 0; data[i] != undefined; i++) {			
		

	            // --- Nome do sistema e Login do Usuário --- //
				this.tmpbuffer.append('<div class="page secondary fixed-header">');
    			this.tmpbuffer.append('<div class="page-header ">');
       			this.tmpbuffer.append('<div class="page-header-content">');
        		this.tmpbuffer.append('<div class="user-login">');
                			this.tmpbuffer.append('<a href="' + data[i].AvatarUrl + '">');
                    			this.tmpbuffer.append('<div class="name">');
                        			this.tmpbuffer.append('<span class="first-name">' +data[i].FirstName+ '</span>');
                        			this.tmpbuffer.append('<span class="last-name">' +data[i].LastName+ '</span>');
                    			this.tmpbuffer.append('</div>');
                    			this.tmpbuffer.append('<div class="avatar">');
                        			this.tmpbuffer.append('<img src="' + data[i].Avatar + '"/>');
                   			this.tmpbuffer.append('</div>');
                			this.tmpbuffer.append('</a>');
            			this.tmpbuffer.append('</div>');
						this.tmpbuffer.append(' <div class="">');
            			   this.tmpbuffer.append(' <img src="../static/KnetMetroMenu/images/Conex_white.png"></img>');
			           this.tmpbuffer.append('  </div> ');
            			this.tmpbuffer.append('<h1>' + data[i].Description + '</h1>');
        			this.tmpbuffer.append('</div>');
    			this.tmpbuffer.append('</div>');
			
		     // -------- Page-Region -------- //
    		this.tmpbuffer.append('<div class="page-region">');
			this.tmpbuffer.append('<div class="page-region-content tiles">');	
				
				
            var TitleItem = data[i].Title;		     
			 
			// Carrega Grupo Menu
			for (i = 0; TitleItem[i] != undefined; i++) {					     						
				var Item = TitleItem[i].Item;					
                   
			    this.tmpbuffer.append('<div class="tile-group">');		
							   
				
			    // Carregado Menu
				for (j = 0; Item[j] !=  undefined; j++) { 
					
					if (Item[j].TitleID != null) {	
						 this.tmpbuffer.append('<div class="tile ' + Item[j].TitleType +' + '+ Item[j].BgColor + '">');					
						
						 if(Item[j].TitleContent == 'icon' || Item[j].TitleContent == 'image') {					 						   
							 this.tmpbuffer.append('  <div class="tile-content '+ Item[j].TitleContent+ '">');
								 this.tmpbuffer.append('  <img src="'+ Item[j].Image +'"/>');
							 this.tmpbuffer.append('</div>');
						 } else {
	   						    this.tmpbuffer.append('  <div class="tile-content'+ Item[j].TitleContent+ '">');
									 this.tmpbuffer.append('<img src="../static/KnetMetroMenu/images/1.jpg" alt="">');
									 this.tmpbuffer.append('<img src="../static/KnetMetroMenu/images/2.jpg" alt="">');
									 this.tmpbuffer.append('<img src="../static/KnetMetroMenu/images/3.jpg" alt="">');
									 this.tmpbuffer.append('<img src="../static/KnetMetroMenu/images/4.jpg" alt="">');
									 this.tmpbuffer.append('<img src="../static/KnetMetroMenu/images/5.jpg" alt="">');
								 this.tmpbuffer.append('</div>');							 
						 }
						 					 
							  
							if (Item[j].Brand == true && Item[j].BrandColor != null){
								this.tmpbuffer.append('<div class="brand + '+Item[j].BrandColor+'">');								
								this.tmpbuffer.append(' <img class="icon" src="'+Item[j].BrandImage+'"/>');
								this.tmpbuffer.append(' <p class="text">'+ Item[j].BrandDescription + '</p>');
							}else{
								 this.tmpbuffer.append('<div class="brand">');
		  					     this.tmpbuffer.append('<span class="name">'+ Item[j].Name + '</span>');	
							}
							
						
							if (Item[j].Badge == true) {								
								this.tmpbuffer.append('<div class="badge">'+ Item[j].BadgeDescription +'</div>');							
							}	
							
							this.tmpbuffer.append('</div>');  
							 
			    }  
				this.tmpbuffer.append('</div>'); 	 		
			}
				
				this.tmpbuffer.append('</div>');
			}			
					this.tmpbuffer.append('</div>');
				this.tmpbuffer.append('</div>');				
			this.tmpbuffer.append('</div>');		  
		}
	   return this.tmpbuffer;
	}
	this.KnetMetroMenuOnClick = function(Name,Description,Url,Position,Menu) {
		if (typeof(this.OnClick) == 'function') {
			
			this.SelectedItem.Name        = Name;
			this.SelectedItem.Description = Description;
			this.SelectedItem.Url         = Url;
			this.SelectedItem.Position    = Position;
			this.SelectedItem.MetroMenu   = Menu;
			this.OnClick();
		}
	}
	this.initKnetMetroMenu = function(){
		
	}
	
	///UserCodeRegionEnd: (do not remove this comment.):
}	